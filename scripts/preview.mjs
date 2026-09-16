// Local-only shim for Mint CLI's missing public .md rewrite.
// Hosted Mintlify already provides this route; no production script is injected.
import http from 'node:http';
import net from 'node:net';
import { spawn } from 'node:child_process';
const portArg = process.argv.indexOf('--port');
const port = Number(portArg >= 0 ? process.argv[portArg + 1] : 4331);
if (!Number.isInteger(port) || port < 1024 || port > 65534) throw new Error('Invalid preview port');
const upstreamPort = port + 1;
const mint = spawn(process.execPath, ['node_modules/@mintlify/cli/bin/start.js', 'dev', '--no-open', '--telemetry', 'false', '--port', String(upstreamPort)], { stdio: 'inherit' });
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const markdown = /\.md$/.test(url.pathname) && ['GET','HEAD'].includes(req.method);
  const target = markdown ? '/_markdown' + url.pathname.replace(/\.md$/, '').replace(/\/$/, '') + url.search : req.url;
  const upstream = http.request({ hostname: '127.0.0.1', port: upstreamPort, path: target, method: req.method, headers: req.headers }, response => {
    const headers = { ...response.headers };
    if (markdown && response.statusCode === 200) {
      headers['content-type'] = 'text/plain; charset=utf-8';
      headers['content-disposition'] = 'inline';
    }
    if (markdown && response.statusCode === 200 && req.headers.accept?.includes('text/html')) {
      delete headers['content-length']; delete headers['content-disposition'];
      headers['content-type']='text/html; charset=utf-8';
      headers['content-security-policy']="default-src 'none'; style-src 'unsafe-inline'";
      res.writeHead(200,headers);
      res.write('<!doctype html><html><head><meta charset="utf-8"><title>Page as Markdown</title><style>body{margin:24px}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:14px/1.6 ui-monospace,monospace}</style></head><body><pre>');
      response.setEncoding('utf8');
      response.on('data',chunk=>res.write(chunk.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')));
      response.on('end',()=>res.end('</pre></body></html>'));
    } else {
      res.writeHead(response.statusCode, headers);
      response.pipe(res);
    }
  });
  upstream.on('error', () => { if (!res.headersSent) res.writeHead(503, {'content-type':'text/plain'}); res.end('Mintlify preview is starting. Refresh shortly.'); });
  req.pipe(upstream);
});
server.on('upgrade', (req, socket, head) => {
  const upstream = net.connect(upstreamPort, '127.0.0.1', () => {
    upstream.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\r\n` + Object.entries(req.headers).map(([key,value])=>`${key}: ${value}`).join('\r\n') + '\r\n\r\n');
    if (head.length) upstream.write(head);
    socket.pipe(upstream); upstream.pipe(socket);
  });
  upstream.on('error',()=>socket.destroy()); socket.on('error',()=>upstream.destroy());
});
const stop = () => { mint.kill('SIGTERM'); server.close(); setTimeout(()=>process.exit(), 1000).unref(); };
for (const signal of ['SIGINT','SIGTERM']) process.on(signal, stop);
mint.on('exit', code => { server.close(); process.exit(code ?? 0); });
server.listen(port, '127.0.0.1', () => console.log(`MediaKind local preview: http://localhost:${port}`));
