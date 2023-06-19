const {model,Schema, default: mongoose} = require('mongoose')
const DOCUMENT_NAME = 'flashCard';
const COLLECTION_NAME ='flashcards'

var flashCardSchema = new mongoose.Schema({
    english_text:{
        type:String,
    },
    vietnamese_text:String,
    flcard_color:String,
    isDraft:{type:Boolean,default:true,index:true,select:false},
    isPublished:{type:Boolean,default:false,index:true,select:false},
    albumID:{type:Schema.Types.ObjectId, ref:'Album'},
   
},{
    timeseries:true,
    collection:COLLECTION_NAME
})

module.exports = mongoose.model(DOCUMENT_NAME,flashCardSchema)