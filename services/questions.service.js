var Question = require('../models/question.model')

_this = this


exports.getQuestions = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var ques = await Question.paginate(query, options)
        return ques;
    } catch (e) {
        throw Error('Error while Paginating Tasks')
    }
}

exports.createdQues = async function(ques){

    var question = new Question({
        question: ques.question
    })

    try{
        var savedQues = await question.save()
        return savedQues;
    }catch(e){
        throw Error("Error while Creating question")
    }
}