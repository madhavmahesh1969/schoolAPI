var express = require('express')

var router = express.Router()

var UserQuestionsController = require('../../controllers/userQuestions.controller');

router.get('/', UserQuestionsController.getUserQuestions)
//router.post('/', QuestionsController.createdQues)

module.exports = router;