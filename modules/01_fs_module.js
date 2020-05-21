// Node module to work with Files. In this example we will see how to import Node core module

// Importing node module fs in a constant fs
const fs = require("fs");

// Create a file notes.txt and will write the text to the same
fs.writeFileSync("notes.txt", "This file is created from NodeJs.");
// This will append the data to file
fs.appendFileSync("notes.txt", "This is Saurabh Jain");
