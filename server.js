const express = require("express"); //creating express server
const errorHandler = require("./middleware/errorHandler"); // import error handler
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 5000; // define a port

// middleware
app.use(express.json()); // all user to send  data request body
app.use("/api/contacts", require("./routes/contactRoutes")); // routing
app.use(errorHandler); // handler error in json format

// listening to the port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
