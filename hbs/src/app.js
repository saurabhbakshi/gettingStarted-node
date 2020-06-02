const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define public paths
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// set up handlebar and views
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
// setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Routes
app.get("", (req, resp) => {
  resp.render("index", {
    title: "API Gateway",
    name: "Saurabh Jain",
  });
});

app.get("/help", (req, resp) => {
  resp.render("help", {
    title: "Help",
    name: "Saurabh Jain",
  });
});

app.get("/about", (req, resp) => {
  resp.render("about", {
    title: "About",
    name: "Saurabh Jain",
  });
});
app.get("/help/*", (req, resp) => {
  resp.render("404", {
    title: "404",
    name: "Saurabh Jain",
    errorMessage: "Help article not found!",
  });
});
app.get("*", (req, resp) => {
  resp.render("404", {
    title: "404",
    name: "Saurabh Jain",
    errorMessage: "Page not found!",
  });
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
