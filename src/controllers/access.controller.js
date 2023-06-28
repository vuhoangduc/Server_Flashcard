
const AccessService = require('../services/access.services')
const {userValidate} = require('../helpers/validation')
const createError = require('http-errors')
class AccessController{
    
    signUp = async(req,res,next) =>{
        const {error} =  userValidate({email:req.body.email,password:req.body.password})
        if (error) return res.send({error:error.details[0].message,status:404})
        res.send(await AccessService.signUp(req.body))
    }

    logIn = async(req,res,next) =>{
        const {error} =  userValidate({email:req.body.email,password:req.body.password})
        if (error) return res.send({error:error.details[0].message,status:404})
        res.send(await AccessService.logIn(req.body))
    }
}   
module.exports = new AccessController;