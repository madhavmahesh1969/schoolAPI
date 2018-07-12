var Login = require('../models/login.model')

_this = this


/* exports.getQuestions = async function(query, page, limit){
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
} */

exports.getUserDetails = async function(username){
    try {
        //var ques = await Question.find({username})
        return true;
    } catch (e) {
        throw Error('Error while Paginating Tasks')
    }
}
