const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trum: true,
//   },
//   password: {
//     type: String,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error('Password cannot include "Password or password"');
//       }
//     },
//   },
//   email: {
//     type: String,
//     reuqire: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("email is not vaild");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "Greg",
//   email: "gmunker@gmail.com",
//   password: "Something",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

const Task = mongoose.model("Task", {
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

const dishes = new Task({
  description: "Load the dish washer",
  completed: false,
});

dishes
  .save()
  .then(() => {
    console.log(dishes);
  })
  .catch((error) => {
    console.log("Error", error);
  });
