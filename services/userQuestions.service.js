var UserQuestion = require('../models/userQuestion.model')

_this = this


exports.getUserQuestions = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var ques = await UserQuestion.paginate(query, options)
        return ques;
    } catch (e) {
        throw Error('Error while Paginating Tasks')
    }
}

/* exports.createdQues = async function(ques){

    var question = new Question({
        question: ques.question
    })

    try{
        var savedQues = await question.save()
        return savedQues;
    }catch(e){
        throw Error("Error while Creating question")
    }
} */