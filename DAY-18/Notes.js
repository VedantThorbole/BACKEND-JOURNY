const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    fs.readFile("NotesLog.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Unable to read file");
      }
      res.writeHead(200, { "Content-Type": "application/json" });
    });
  }

  else if (req.method === "POST" && req.url === "/add-note") {
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      try {
        const note = JSON.parse(body);
        addLOGS(note);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Note added", note }));
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid request");
  }
});

server.listen(8000, () => {
  console.log("Server running on 8000");
});

function addLOGS(noteObj) {
  let notes = [];

  if (fs.existsSync("NotesLog.json")) {
    const data = fs.readFileSync("NotesLog.json", "utf-8");
    notes = JSON.parse(data);
  }

  notes.push({
    id: Date.now(),
    ...noteObj,
    createdAt: new Date().toISOString()
  });

  fs.writeFileSync("NotesLog.json",JSON.stringify(notes, null, 2));
}
