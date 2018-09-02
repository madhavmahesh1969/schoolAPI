var UserService = require('../services/user.service')

_this = this


exports.createUser = async function(req, res, next){
    console.log('req.body',req.body);
    var user = {        
      "userName":req.body.userName,
      "password":req.body.password,
      "question1":req.body.question1,
      "question2":req.body.question2,
      "question3":req.body.question3,
      "answer1":req.body.answer1,
      "answer2":req.body.answer2,
      "answer3":req.body.answer3
    }

    try{
        var createUser = await UserService.createUser(user)
        return res.status(201).json({status: 201, data: createUser, message: "Succesfully Created user"})
    }catch(e){
        return res.status(400).json({status: 400, message: "user Creation was Unsuccesfull"})
    }
}