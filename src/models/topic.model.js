const {model,Schema, default: mongoose} = require('mongoose')
const DOCUMENT_NAME = 'Topic';
const COLLECTION_NAME ='topics'

var topicSchema = new Schema({
    topic_title :{
        type:String,
        required:true,
        unique:true,
        index:true,
    }
},{
    timeseries:true,
    collection:COLLECTION_NAME
})


module.exports = model(DOCUMENT_NAME,topicSchema)

