var QuestionsService = require('../services/questions.service')

_this = this


exports.getQuestions = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    console.log(page, limit)

    try{
        var ques = await QuestionsService.getQuestions({}, page, limit)
        return res.status(200).json(ques.docs);
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createdQues = async function(req, res, next){
    var ques = {
        question: req.body.question
    }

    try{
        var createdQues = await QuestionsService.createdQues(ques)
        return res.status(201).json({status: 201, data: createdQues, message: "Succesfully Created ques"})
    }catch(e){
        return res.status(400).json({status: 400, message: "ques Creation was Unsuccesfull"})
    }
}