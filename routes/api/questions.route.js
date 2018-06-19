var express = require('express')

var router = express.Router()

var QuestionsController = require('../../controllers/questions.controller');

router.get('/', QuestionsController.getQuestions)
router.post('/', QuestionsController.createdQues)

module.exports = router;