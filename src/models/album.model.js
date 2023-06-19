const {model,Schema, default: mongoose} = require('mongoose')
const slugify = require('slugify')
const DOCUMENT_NAME = 'Album';
const COLLECTION_NAME ='albums'

var albumSchema = new mongoose.Schema({
    album_name:{
        type:String,
        required:true,
    },
    album_slug:String,
    album_color:String,
    album_rating:{
        type:Number,
        default:4.5,
        min:[1,'Rating must be above 1.0'],
        max:[5,'Rating must be above 5.0'],
        set:(val) =>Math.round(val *10) /10
    },
    isDraft:{type:Boolean,default:true,index:true,select:false},
    isPublished:{type:Boolean,default:false,index:true,select:false},
    userID:{type:Schema.Types.ObjectId, ref:'User'},
    topicID:{type:Schema.Types.ObjectId, ref:'Topic'},
},{
    timeseries:true,
    collection:COLLECTION_NAME
})
albumSchema.pre('save',function(next){
    this.product_slug = slugify(this.product_name, {lower:true})
    next()
})
module.exports = mongoose.model(DOCUMENT_NAME,albumSchema)