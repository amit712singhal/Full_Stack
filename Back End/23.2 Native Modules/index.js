const fs = require("fs");

fs.writeFile("message.txt", "Hello From Mars!", (err) => {
  if (err) throw err;
  console.log("File Saved");
});

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
