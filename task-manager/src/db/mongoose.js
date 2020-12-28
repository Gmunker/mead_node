<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
=======
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(data => console.log('connected to the db'))
  .catch(err => console.log(err))
>>>>>>> 99a8a12a52b5729fec30570310fa51fdc495a1b5
