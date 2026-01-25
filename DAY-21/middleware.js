const express = require("express");

const app = express();
const PORT = 8000;

app.use((req,res,next)=>{
    console.log("A");
    next();
})

app.use((req,res,next)=>{
    console.log("B");
    next();
})

app.get("/",(req,res)=>{
    console.log("C");
    res.send("Done");
});

app.listen(PORT,()=>{
  console.log(`Port is runing on ${PORT}`);
})