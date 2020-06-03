const express = require("express");
require("../src/db/mongoose");

const User = require("../src/models/user");
const Task = require("../src/models/task");
const ERROR = require("../src/error");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Reached the API gateway</h1>");
});
// User API
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
});

// Task API
app.get("/task/:id", (req, res) => {
  //   console.log(req.params.id);
  Task.findById(req.params.id)
    .then((task) => {
      if (!task) {
        res.status(404).send(ERROR["404"]);
      } else {
        res.send(task);
      }
    })
    .catch((error) => {
      res.status(500).send(ERROR["500"] + " " + error.message);
    });
});

app.get("/tasks", (req, res) => {
  const filter = req.query;
  Task.find(filter)
    .then((tasks) => {
      if (!tasks || tasks.length == 0) {
        res.status(404).send(ERROR["404"]);
      } else {
        res.send(tasks);
      }
    })
    .catch((error) => {
      res.status(500).send(ERROR["500"] + " " + error.message);
    });
});

app.post("/task", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((error) => {
      res.status(500).send(ERROR["500"] + " " + error.message);
    });
});

//Express startup
app.listen(port, () => {
  console.log("Server is up @ ", port);
});
