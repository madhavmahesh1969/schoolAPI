var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var QuestionSchema = new mongoose.Schema({
    question: String   
})

QuestionSchema.plugin(mongoosePaginate)
const Question = mongoose.model('QuestionSchema', QuestionSchema)

module.exports = Question;