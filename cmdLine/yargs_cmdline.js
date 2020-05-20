// importing core module

//importing npm modules
const yargs = require("yargs");

// importing custom module

// For contrast and comparison you can check the parsed output by yargs by uncommenting 9, 10 below
// console.log(process.argv);
// console.log(yargs.argv);

yargs.version("1.0.0"); //adding version to this script

// Let's build option menu for notes app with following options add, remove, read, list, with help for each options

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding new note!");
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: function () {
    console.log("Removing the note");
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

console.log(yargs.argv);
