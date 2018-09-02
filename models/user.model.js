var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
      "userName":String,
      "password":String,
      "question1":String,
      "question2":String,
      "question3":String,
      "answer1":String,
      "answer2":String,
      "answer3":String    
})

const User = mongoose.model('UserSchema', UserSchema)

module.exports = User;