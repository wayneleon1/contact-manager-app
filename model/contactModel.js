const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref:"User"
    },
    name: {
      type: String,
      require: [true, "Please add the cantact name"],
    },
    email: {
      type: String,
      require: [true, "Please add the contact email address"],
    },
    phone: {
      type: Number,
      require: [true, "Please add the contact Phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
