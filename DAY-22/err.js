const express= require("express");
const app = express();
const port = 8000;
app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});

// app.use((req, res, next) => {
//   console.log("Time taken:", Date.now() - req.startTime);
//   next();
// });


app.use((req,res,next)=>{
    console.log("First route");
    next();
})
app.use((req,res,next)=>{
     console.log("Second route");
     next();
})
app.get("/",(req,res)=>{
    res.send("You are safe")
})
app.get("/crash",(req,res)=>{
    throw new Error("It crashed");
})
app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).json({
    error: err.message || "Something broke"
  });
})


app.listen(port,()=>{
    console.log(`server is runnig on ${port}....`);
})