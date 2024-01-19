const express = require("express"); //creating express server
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // define a port

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
