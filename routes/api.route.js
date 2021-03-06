var express = require('express')

var router = express.Router()
var questions = require('./api/questions.route')
var login = require('./api/login.route')
var userQuestions = require('./api/user_questions.route')
var user = require('./api/user.route')

router.use('/questions', questions);
router.use('/login', login);
router.use('/userQuestions', userQuestions);
router.use('/user', user);

module.exports = router;