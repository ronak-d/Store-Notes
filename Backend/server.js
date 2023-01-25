const express = require("express");
const dotenv = require("dotenv");
const notes = require("./Data/notes");
const connectDB = require("./Config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/notes/", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((e) => e._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));
