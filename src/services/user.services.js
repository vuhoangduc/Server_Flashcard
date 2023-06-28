const userSchema = require("../models/user.model")


const findByEmail = async ({email, select ={
    email:1, password:1,name:1,status:1
}}) =>{
    return await userSchema.findOne({email:email}).select().lean()

}


module.exports={
    findByEmail
}