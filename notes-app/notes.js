const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse(`Successfully added the note ${title}`));
  } else {
    console.log(chalk.red.inverse(`${title} already exists`));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const filteredNotes = notes.filter(note => note.title === title);

  if (filteredNotes.length > 0) {
    notes.map((note, index) => {
      if (note.title === title) {
        notes.splice(index, 1);
        saveNotes(notes);
        console.log(chalk.green.inverse(`The note ${title} has been removed!`));
      }
    });
  } else {
    console.log(chalk.red.inverse('No notes found with that title'));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('\n Your Notes \n'));
  notes.map(note => {
    console.log(`Title: "${note.title}"`);
  });
};

const readNote = title => {
  const notes = loadNotes();

  const currentNote = notes.filter(note => note.title === title);

  if (currentNote.length > 0) {
    console.log(`Title: ${currentNote[0].title}`);
    console.log(`Body: ${currentNote[0].body}`);
  } else {
    console.log(
      chalk.red.inverse(
        'No notes found with that title. Run "app.js list" to see a list of all notes.'
      )
    );
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
