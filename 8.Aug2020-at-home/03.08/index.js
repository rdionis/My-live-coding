//server

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey, I am homepage");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
