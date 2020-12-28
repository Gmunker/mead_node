<<<<<<< HEAD
const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trum: true,
=======
const mongoose = require('mongoose')
const validator = require('validator')

const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
>>>>>>> 99a8a12a52b5729fec30570310fa51fdc495a1b5
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
<<<<<<< HEAD
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot include "Password or password"');
=======
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
>>>>>>> 99a8a12a52b5729fec30570310fa51fdc495a1b5
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
<<<<<<< HEAD
      if (!validator.isEmail(value)) {
        throw new Error('email is not vaild');
=======
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"')
>>>>>>> 99a8a12a52b5729fec30570310fa51fdc495a1b5
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
<<<<<<< HEAD
        throw new Error('Age must be a positive number');
      }
    },
  },
});
=======
        throw new Error('Age must be a postive number')
      }
    }
  }
})

userSchema.statics.findByCredentials = async(email, password) => {
  const user = await User.findOne({email})

  if (!user) {
    throw new Error('Unable to login!')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Unable to login!')
  }

  return user
}

//Hash the plain text password before saving
userSchema.pre('save', async function(next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema)
>>>>>>> 99a8a12a52b5729fec30570310fa51fdc495a1b5

module.exports = User
