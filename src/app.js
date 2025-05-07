const express = require("express");
const path = require("path");
const dateRoute = require("./routes/date");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Use the date route
app.use("/api", dateRoute);

// Server homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
