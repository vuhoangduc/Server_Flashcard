
const {nySchema} = require('../models/ny.models');

class NyController{

   static getAllNy = (req,res,next) =>{
        nySchema.find({})
        .populate('type')
        .then(result =>{
            res.send({
                message:'Lấy thành công!!!',
                status:200,
                data:result
            })
        })
        .catch(error =>{
            console.log(error);
            res.send({
                error:error,
                status:404
            })
        })

    } 
    
    static createNewNy = async (req,res,next) =>{
        const newNy = req.body
        await nySchema.create(newNy)
        .then(result =>{
            res.send({
                message:'Tạo mới thành công!!',
                status:201,
                result
            })
        })

    }

    static delete = async (req,res,next) =>{
        const userId = req.params.id;
        nySchema.deleteOne({_id:userId})
        .then(() =>{
            res.send({
                message:'Xóa thành công!!',
                status:200
            })
        })
    }

    static update = async (req,res,next) =>{
        const userId = req.params.id;
        nySchema.updateOne({_id:userId},{$set:req.body})
        .then(result =>{
            res.send({
                message:'Sửa thành công!!',
                status:201,
                result
            })
        })

    }
} 

module.exports = NyController