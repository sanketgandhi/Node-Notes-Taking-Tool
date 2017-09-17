const fs = require('fs');

/**
 * This method is used to fetch the notes from the file
 * @return json object
 */
var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

/**
 * This method is used to save note in the form of string 
 * @param {object} note 
 */
var saveNotes = (note) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(note));
};

/**
 * This method is used to append notes in the JSON file
 * @param {string} title 
 * @param {string} body 
 */
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };    
    
    var duplicateNotes = notes.filter( (note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

/**
 * This method is used to fetch notes for given title
 * @param {string} title 
 */
var getTitle = (title) => {
    var notes = fetchNotes();
    var readNotes = [];

    var filterNotes = notes.filter( (note) => note.title === title );
    
    return filterNotes[0];
};

/**
 * This method is used to remove note for given title
 * @param {string} title 
 */
var removeTitle = (title) => {
    var allNotes = fetchNotes();

    var filteredNotes = allNotes.filter( (note) => note.title !== title);

    saveNotes(filteredNotes);

    return allNotes.length !== filteredNotes.length;

};

/**
 * Logger
 * This method is used to log the output
 * @param {string} note 
 */
var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getTitle,
    removeTitle,
    logNote
};