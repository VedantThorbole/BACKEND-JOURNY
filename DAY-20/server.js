const express = require("express");

const app = express();
const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("ok");
})

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/notes",(req,res)=>{

    res.status(201).json({
        message: "Note resived",
        note: req.body
    })
    
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
