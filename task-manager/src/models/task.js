const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  description: {
    type: String,
    require: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
