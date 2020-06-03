const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    trim: true,
    default: "Task body",
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = Task;
