const express = require("express");
const app = express();

let data = "Initial data";
let waitingClient = [];

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}\\index.html`);
});

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingClient.push(res);
  }
});

app.get("/updateData", (req, res) => {
  data = req.query.data;
  while (waitingClient.length > 0) {
    const client = waitingClient.pop();
    client.json({ data });
  }
  res.send({ success: "Data updated successfully" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
