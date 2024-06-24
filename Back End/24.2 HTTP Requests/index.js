import express from "express";

const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>6396*****</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>CSE student</h1>");
});

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
