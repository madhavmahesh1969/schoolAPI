var express = require('express')

var router = express.Router()
var questions = require('./api/questions.route')


router.use('/questions', questions);


module.exports = router;