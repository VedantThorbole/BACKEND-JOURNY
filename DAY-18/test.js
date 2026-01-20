// const http = require("http");

// let leakyArray = [];

// const server = http.createServer((req, res) => {
//   if (req.url === "/leak") {
//     leakyArray.push(new Array(1e6).fill("🔥"));
//     res.end("Leaking memory...");
//   } else if (req.url === "/memory") {
//     res.end(JSON.stringify(process.memoryUsage()));
//   } else {
//     res.end("OK");
//   }
// });

// server.listen(8000, () => {
//   console.log("Server running on 8000");
// });

// const http = require("http");

// function blockCPU() {
//   while (true) {} // infinite loop
// }

// const server = http.createServer((req, res) => {
//   if (req.url === "/block") {
//     blockCPU();
//     res.end("This will never send");
//   }

//   if (req.url === "/health") {
//     res.writeHead(200);
//     res.end("OK");
//   }
// });

// server.listen(8000, () => {
//   console.log("Server running on port 8000");
// });
