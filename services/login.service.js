var Login = require('../models/login.model')
var User = require('../models/user.model')

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
        var user = await User.find({userName:username});
        console.log('user',  user);
        return user;
    } catch (e) {
        throw Error('Error while Paginating Tasks')
    }
}
