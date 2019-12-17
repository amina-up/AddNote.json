const note = require("./notes1");
const yargs = require("yargs");
const fs = require("fs");
const commande = yargs.argv._[0];
let params = yargs.argv;

if (commande == "addNote") {
  console.log(note);
  if (params.title && params.body) {
    fs.readFile("./note.json", "utf8", (err, data) => {
      if (err) console.error(err);
      fs.writeFile(
        "./note.json",
        JSON.stringify([
          ...JSON.parse(data),
          { title: params.title, body: params.body }
        ]),
        "utf8",
        function(err) {
          if (err) console.log(err);
        }
      );
    });

    console.log("your obj has been added to the note");
  } else console.log("title or body missing for more info type help");
}
if (commande == "removeNote") {
  fs.readFile("./note.json", "utf8", (err, data) => {
    if (err) console.error(err);
    fs.writeFile(
      "./note.json",
      JSON.stringify(JSON.parse(data).filter(el => el.title !== params.title)),
      "utf8",
      function(err) {
        if (err) console.log(err);
      }
    );
  });
  console.log(params.title + " has been deleted");
}
if (commande == "help") {
  console.log("to add an object you should type: add title:... body:...");
  console.log("to delete an object type: remove title:...");
  console.log("to show the whole list type: list");
}
if (commande == "read") {
  fs.readFile("./note.json", "utf8", (err, data) => {
    const str = JSON.stringify(
      JSON.parse(data).filter(el => el.title == params.title)
    );
    if (!str.length) {
      console.log("there is no such tite try again");
    } else console.log(str);
  });
}
