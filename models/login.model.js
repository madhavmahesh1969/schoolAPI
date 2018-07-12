var mongoose = require('mongoose')

var LoginSchema = new mongoose.Schema({
    username: String,
    password: String
})

const Login = mongoose.model('LoginSchema', LoginSchema)

module.exports = Login;