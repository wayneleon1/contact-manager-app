const express = require("express"); //creating express server
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // define a port

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
