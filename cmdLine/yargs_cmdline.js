// importing core module

//importing npm modules
const yargs = require("yargs");

// importing custom module

const notes = require("../node_apps/notes");
// For contrast and comparison you can check the parsed output by yargs by uncommenting 9, 10 below
// console.log(process.argv);
// console.log(yargs.argv);

yargs.version("1.0.0"); //adding version to this script

// Let's build option menu for notes app with following options add, remove, read, list, with help for each options

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      alias: "t",
      demandOption: true, //marking this parameter as required
      type: "string", // mapping this option value to string
    },
    body: {
      describe: "Note Body",
      alias: "b",
      type: "string", // mapping this option value to string
    },
  },
  handler: function (argv) {
    console.log(
      "Adding new note! \n Title : " + argv.title + "\n Body : ",
      argv.body
    );
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      alias: "t",
      demandOption: true, //marking this parameter as required
      type: "string", // mapping this option value to string
    },
  },
  handler: function (argv) {
    console.log("Removing the note with Title: ", argv.title);
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      alias: "t",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Reading a note with title: ", argv.title);
    console.log(notes.readNote(argv.title));
  },
});
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
    console.log(notes.getNotes());
  },
});

yargs.parse();
// console.log(yargs.argv);
