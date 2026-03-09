const express = require("express");
const router = require("./routes/notes");
const logger = require("./middlewares/logger")
const app = express();

app.use(logger);
app.use(router);

module.exports = app;