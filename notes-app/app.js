const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body Text of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'removing a note',
  builder: {
    title: {
      describe: 'Title to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List of all notes',
  handler: () => {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'Title to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    notes.readNote(argv.title);
  },
});

yargs.parse();

// if (command === "add") {
//   console.log("adding note")
// } else if (command === "remove") {
//   console.log("removing note")
// }
