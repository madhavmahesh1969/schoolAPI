var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var userQuestionSchema = new mongoose.Schema({
        "question":String,
        "answer":String
})

userQuestionSchema.plugin(mongoosePaginate)
const UserQuestionSchema = mongoose.model('UserQuestionSchema', userQuestionSchema)

module.exports = UserQuestionSchema;