


class NyController{

   static getAllNy =async (req,res,next) =>{
        res.send({
            message:'Lấy thành công!!!',
            status:200,
            data:''
        })
    } 
    
    static createNewNy = async (req,res,next) =>{
        const newNy = req.body

        res.send({
            message:'Tạo mới thành công!!',
            status:201,
            newNy
        })
    }
} 

module.exports = NyController