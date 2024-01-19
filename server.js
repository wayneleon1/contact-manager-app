const express = require("express"); //creating express server
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // define a port

// middleware
app.use(express.json()); // all user to send  data request body
app.use("/api/contacts", require("./routes/contactRoutes")); // routing

// listening to the port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
