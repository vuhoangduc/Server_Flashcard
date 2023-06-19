const {model,Schema, default: mongoose} = require('mongoose')
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME ='users'

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    }
},{
    timeseries:true,
    collection:COLLECTION_NAME
})

module.exports = mongoose.model(DOCUMENT_NAME,userSchema)