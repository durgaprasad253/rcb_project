// Importing required modules
const express = require("express");

// Initializing Express app
const app = express();

const timer = () => {
  console.log("hello");
};
// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  setInterval(timer, 1000);
});
