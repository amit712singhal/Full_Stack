// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import ejs from "ejs";

// 2. Create an express app and set the port number.
const app = express();
const port = 5000;
const API_URL = "https://secrets-api.appbrewery.com";

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 5. When the user goes to the home page it should render the index.ejs file.

// 6. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    const response = result.data;
    const randomSecret = response.secret;
    const randomUserName = response.username;
    res.render("index.ejs", { secret: randomSecret, user: randomUserName });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    res.status(500);
  }
});

// 4. Listen on your predefined port and start the server.
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
