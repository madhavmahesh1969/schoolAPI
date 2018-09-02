var User = require('../models/user.model')

_this = this


exports.createUser = async function(user){

    var user = new User({
        "userName":user.userName,
        "password":user.password,
        "question1":user.question1,
        "question2":user.question2,
        "question3":user.question3,
        "answer1":user.answer1,
        "answer2":user.answer2,
        "answer3":user.answer3   
    })

    try{
        var savedUser = await user.save()
        console.log('savedUser',savedUser);
        return savedUser;
    }catch(e){
        throw Error("Error while Creating user")
    }
}