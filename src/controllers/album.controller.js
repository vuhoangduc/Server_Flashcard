const AlbumService = require('../services/album.service');

class AlbumController{

    CreateNew= async (req,res,next) =>{
        res.send( await AlbumService.CreateNew(req.body))
    }
}
module.exports = new AlbumController;