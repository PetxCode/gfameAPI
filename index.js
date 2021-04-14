const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 22001;
const app = express();

app.get("/", async (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`${port} is ready`);
});
