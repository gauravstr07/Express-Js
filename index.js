const express = require("express");
const path = require("path");
const router = require("./router/blog");

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "router / blog.js")));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
