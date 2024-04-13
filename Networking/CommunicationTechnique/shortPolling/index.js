const express = require("express");
const app = express();

let data = "Initial data";

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}\\index.html`);
});

app.get("/getData", (req, res) => {
  res.send({
    data,
  });
});

app.get("/updateData", (req, res) => {
  console.log("updated called");
  data = "Updated Data";
  res.send({
    data,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
