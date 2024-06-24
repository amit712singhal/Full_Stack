import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var data = {
  htmlElement: "<h1>Write your name below 👇</h1>",
};

app.get("/", (req, res) => {
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  var firstName = req.body["fName"];
  var lastName = req.body["lName"];
  data.htmlElement = `<h1>There are ${
    firstName.length + lastName.length
  } letters in your name `;
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
