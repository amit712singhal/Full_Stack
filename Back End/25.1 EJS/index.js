import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const today = new Date();
const dayOfWeek = today.getDay();
var data = {
  text: "",
  check: "",
};

app.use(bodyParser.urlencoded(import.meta.url));

function checkDay(req, res, next) {
  if (dayOfWeek == 0 || dayOfWeek == 6) {
    data.check = "the weekend";
    data.text = "have fun";
  } else {
    data.check = "a weekday";
    data.text = "work hard";
  }
  next();
}

app.use(checkDay);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    day: data.check,
    message: data.text,
  });
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
