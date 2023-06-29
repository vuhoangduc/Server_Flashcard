const {model,Schema} = require('mongoose');
const DOCUMENT_NAME ='Ny'
const COLLECTION_NAME = 'nys'


const nySchema = new Schema({
    name:{type:String, require:true},
    phone:{type: String, require:true},
    des:{type:String, require:true},
    type:{type:Schema.Types.ObjectId, ref:'nyType'}
},{
    collection:COLLECTION_NAME,
    timestamps:true,
  }
)

const nyTypeSchema = new Schema({
    name:{type:String, require:true},
    des:{type:String, require:true},
},{
    collection:'nytypes',
    timestamps:true,
  }
)


module.exports = {
   nySchema: model(DOCUMENT_NAME,nySchema),
   nyTypeSchema: model('nyType',nyTypeSchema)
}