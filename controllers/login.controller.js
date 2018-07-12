var LoginService = require('../services/login.service')

_this = this


exports.getUserDetails = async function(req, res, next){

    var username = req.query.username;
    var password = req.query.password;

    console.log(username, password)

    try{
        var ques = await LoginService.getUserDetails(username);
        return res.status(200).json(ques);
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}