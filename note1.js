const fs = require("fs");

let file = JSON.parse(fs.readFileSync("./notes.json"));
const addNote = (title, body) => {
  var note = { title, body };
  file = file.concat(note);
  fs.writeFileSync("notes.json", JSON.stringify(file));
  console.log(file);
};
const removeNote = title => {
  let newFile = file.filter(el => el.title != title);
  fs.writeFileSync("notes.json", JSON.stringify(newFile));
};

const readNote = title => {
  let NewFile = file.filter(el => el.title === title);
  console.log(NewFile);
};
const myList = () => {
  console.log(file);
};
const help = () => {
  console.log(help);
};
module.exports = { addNote, removeNote, readNote, myList, help };
