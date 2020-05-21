const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  const notes = loadNotes();
  return notes;
};

const readNote = function (title) {
  const notes = loadNotes();
  return notes.find((note) => note.title === title);
};
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title already taken!");
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length > filteredNotes.length) {
    console.log(chalk.green.inverse("Note removed"));
  }
  saveNotes(filteredNotes);
};
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./output/notes.json", dataJSON);
};
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("./output/notes.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote,
  removeNote,
  readNote,
};
