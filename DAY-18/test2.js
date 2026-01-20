const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if (req.method==="GET" && req.url==="/") {
        res.writeHead(200,{'content-type': 'text/plain'})
        res.end("Welcome to my routes")
    } 
    else if(req.url==="/notes"){
        if (req.method==="GET") {
            fs.readFile("test.json","utf-8",(err,data)=>{
                if (err) {
                    res.writeHead(500,{'content-type': 'text/plain'})
                    res.end("Welcome to my routes")
                }
                res.writeHead(200,{'content-type': 'application/json'})
                    res.end(data);
            })
        } 
        else if(req.method==="POST")
        {
            body="";

           req.on("data",chunk=> body += chunk);

           req.on("end",()=>{
            try {
                const note = JSON.parse(body);
                addLOGS(note);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Note added", note }));
            } catch (error) {
                 res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
           })

        }
        else{
             res.writeHead(404,{'content-type': 'text/plain'})
             res.end("Invalid Method")
        }

    }
    else if(req.url === "/health" && req.method === "GET")
    {
        res.writeHead(200,{'content-type': 'text/plain'})
        res.end("ok")
    }
    else if (req.url === "/block" && req.method === "GET") {
    const start = Date.now();
    while (Date.now() - start < 5000) {} // block for 5 seconds
    res.end("Blocked for 5 seconds");
    }

    else{
        res.writeHead(404,{'content-type': 'text/plain'})
        res.end("Wrong routes")
    }
})

server.listen(8000,()=>{
    console.log("Listening to port 8000")
})



function addLOGS(noteObj) {
  let notes = [];

  if (fs.existsSync("test.json")) {
    const data = fs.readFileSync("test.json", "utf-8");
    notes = JSON.parse(data);
  }

  notes.push({
    id: Date.now(),
    ...noteObj,
    createdAt: new Date().toISOString()
  });

  fs.writeFileSync("test.json",JSON.stringify(notes, null, 2));
}