const express = require("express");
const app = express();
const authRotues = require("./routes/auth-routes");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/tigerNotesFrontMain.html");
});

app.get("/notePage", (req, res) => {
  res.sendFile(__dirname + "/notePage.html");
});

app.get("/calendar", (req, res) => {
  res.sendFile(__dirname + "/calendar.html");
});

app.use("/auth", authRotues);

const port = 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
