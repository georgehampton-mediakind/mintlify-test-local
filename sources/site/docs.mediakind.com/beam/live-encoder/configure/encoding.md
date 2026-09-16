# Source: https://docs.mediakind.com/beam/live-encoder/configure/encoding

# Configure the general encoding parameters

Before configuring the input stream general parameters, you must select the export type. 
Select either **IP TV** or **Internet TV**.

- The main purpose of **IP TV** is interlaced encoding, dedicated to TV (Progressive encoding is also a configuration to leverage true motion feature).

- Codec presets are different between **Internet TV** and **IP TV** export types. Video quality is better with IP TV. We use closed GOP for chunking in Internet TV and open GOP in IP TV. These are the 3 main differences.

- Video, audio and metadata parameters and values may differ depending on the selected export type.