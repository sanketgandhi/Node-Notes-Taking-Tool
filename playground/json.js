// var obj = {
//     name: 'Sanket',
//     age: 25
// };

// console.log(typeof obj);
// console.log(obj);

// var jsonObj = JSON.stringify(obj);
// console.log(typeof jsonObj);
// console.log(jsonObj);

// var againObj = JSON.parse(jsonObj);
// console.log(typeof againObj);
// console.log(againObj);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);