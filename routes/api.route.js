var express = require('express')

var router = express.Router()
var questions = require('./api/questions.route')
var login = require('./api/login.route')

router.use('/questions', questions);
router.use('/login', login);


module.exports = router;