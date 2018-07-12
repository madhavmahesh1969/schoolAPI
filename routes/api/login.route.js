var express = require('express')

var router = express.Router()

var LoginController = require('../../controllers/login.controller');

//router.get('/', QuestionsController.getQuestions)
router.post('/', LoginController.getUserDetails)

module.exports = router;