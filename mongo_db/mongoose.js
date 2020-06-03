const mongoose = require("mongoose");

const validator = require("validator");

const url = "mongodb://127.0.0.1:27017";

mongoose.connect(url + "/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (age < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
});

// const me = new User({ name: "Saurabh Jain", age: 36 });
const me = new User({ name: "Meha Jain", email: "memoo" });
me.save()
  .then((createdUser) => {
    console.log(createdUser);
  })
  .catch((error) => {
    console.log(error.message);
  });

// User.findOne({ name: "Saurabh Jain" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error Occurred");
//   });

// User.findOneAndUpdate({ name: "Saurabh Jain" }, { age: 37 }, { new: true })
//   .then((result) => {
//     console.log(result.age);
//   })
//   .catch((error) => {
//     console.log("Error Occurred");
//   });
