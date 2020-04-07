const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
  },
  (error, client) => {
    if (error) {
      return console.log('unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ name: 'Greg' }, (error, user) => {
    //   if (error) {
    //     return console.log('unable to fetch user');
    //   }
    //   console.log(user);
    // });

    // db.collection('users')
    //   .find({ age: 39 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    db.collection('tasks').findOne(
      { _id: new ObjectID('5cf897bcb954bd4e7aae6df5') },
      (error, task) => {
        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });

    // insert

    // db.collection('users').insertOne(
    //   {
    //     name: 'April',
    //     age: 39,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('unable to inser user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [{ name: 'Greg Munker', age: 39 }, { name: 'Amanda', age: 27 }],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('unable to insert users');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     { description: 'finish this course', completed: false },
    //     { description: 'get a date with amanda', completed: false },
    //     {
    //       description: 'have a threesome with lauren and april',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('could not insert tasks');
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
