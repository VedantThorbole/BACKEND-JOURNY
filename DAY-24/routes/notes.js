const express = require("express");
const router = express.Router();
const notes = require("../data/notes");

router.get("/",(req,res)=>{
    res.end("Notes Ok");
})
router.get("/:id",(req,res)=>{
    const id = Number(req.params.id);

  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).send("Invalid note ID");
  }

  res.json(note);
})

module.exports = router;