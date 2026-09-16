// Use Mintlify's native search, including its hosted permissions and index.
(() => {
  if (window.__mediaKindSearchBound) return;
  window.__mediaKindSearchBound = true;
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest?.('[data-mk-search]');
    if (!trigger) return;
    const entry = document.getElementById('search-bar-entry');
    const mobileEntry = document.getElementById('search-bar-entry-mobile');
    const button = entry?.getClientRects().length ? entry : mobileEntry;
    if (!button) return;
    button.click();
    const query = trigger.getAttribute('data-mk-search');
    if (!query) return;
    // The local CLI may show its login notice instead of an enabled search input.
    const fill = () => {
      const input = document.querySelector('[role="dialog"] input, input[placeholder*="Search"]');
      if (!input) return false;
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, query);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    };
    if (fill()) return;
    const observer = new MutationObserver(() => { if (fill()) observer.disconnect(); });
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 3000);
  });
})();

// Local Mint CLI compatibility: initiate clipboard permission during the click.
// The native CLI handler writes only after an asynchronous fetch, which loses
// the user gesture in some browsers. Hosted Mintlify keeps its native handler.
(() => {
  if (!['localhost','127.0.0.1'].includes(location.hostname) || window.__mkLocalCopyBound) return;
  window.__mkLocalCopyBound = true;
  document.addEventListener('click', async (event) => {
    const button = event.target.closest?.('#page-context-menu-button, [role="menuitem"]');
    if (!button || !/^Copy page/.test(button.textContent.trim()) && button.getAttribute('aria-label') !== 'Copy page') return;
    event.preventDefault(); event.stopImmediatePropagation();
    const pathname = location.pathname.replace(/\/$/,'') || '/index';
    const markdown = fetch(pathname+'.md', {headers:{Accept:'text/plain'}}).then(r=>{if(!r.ok)throw Error('Markdown unavailable');return r.text()});
    let copied=false;
    try {
      if (typeof ClipboardItem !== 'undefined') {
        await navigator.clipboard.write([new ClipboardItem({'text/plain':markdown.then(value=>new Blob([value],{type:'text/plain'}))})]);
        copied=true;
      }
    } catch { /* Try the browser's plain-text copy fallback below. */ }
    if (!copied) {
      try {
        const text=await markdown;
        const field=document.createElement('textarea');
        field.value=text;field.style.cssText='position:fixed;left:-9999px;top:0';
        document.body.append(field);field.select();copied=document.execCommand('copy');field.remove();
      } catch { copied=false; }
    }
    const status=document.createElement('div');status.setAttribute('role','status');
    status.className='mk-copy-status';status.textContent=copied?'Page copied as Markdown':'Copy unavailable. Use View as Markdown to select the text.';
    document.body.append(status);setTimeout(()=>status.remove(),3000);
  },true);
})();
