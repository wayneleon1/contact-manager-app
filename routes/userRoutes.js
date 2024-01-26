const express = require("express");
const router = express.Router();

router.post("/register", (res, req) => {
  res.json({ message: "Register the user" });
});

router.post("/login", (res, req) => {
  res.json({ message: "Login user" });
});
router.get("/current", (res, req) => {
  res.json({ message: "current user information" });
});

module.exports = router;
