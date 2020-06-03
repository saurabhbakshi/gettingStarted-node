const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model(
  "User",
  (schema = {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      trim: true,
      validate(value) {
        if (value < 0) {
          throw new Error("Invalid age!, age should be greater than 0");
        }
      },
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email id");
        }
      },
    },
  })
);

module.exports = User;
