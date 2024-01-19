const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// Get all contacts & Create contact
router.route("/").get(getContacts).post(createContact);

// Get , Update , Delete  contact by id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
