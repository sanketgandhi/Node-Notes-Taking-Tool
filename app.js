const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

/**
 *  Access the command 
 *  Contains - add, list, read, remove
 */
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(_.isUndefined(note)) {
        console.log('Note taken');
    } else {
        console.log('Note created');
        notes.logNote(note);
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printining ${allNotes.length} note(s).`);
    allNotes.forEach( (note) => notes.logNote(note));

} else if (command === 'read') {
    var note = notes.getTitle(argv.title);
    console.log(note);
    if(note) {
        console.log('Note Found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }

} else if (command === 'remove') {
    var noteRemoved = notes.removeTitle(argv.title);
    var message = noteRemoved ? 'Note removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Command not recognized');
}