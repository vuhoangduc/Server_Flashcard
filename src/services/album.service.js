const albumSchema = require('../models/album.model');


class AlbumService{
    static CreateNew = async ({ album_name, userId, topicId, album_color }) => {
        console.log(album_name, userId, topicId, album_color);
        try {
          const createdAlbum = await albumSchema.create({
            album_name: album_name,
            userID: userId,
            topicID: topicId,
            album_color: album_color,
          });
      
          return {
            message: 'Tạo thành công album mới',
            status: 201,
            result: createdAlbum,
          };
        } catch (error) {
          console.error('Error creating album:', error);
          return {
            message: 'Tạo mới thất bại',
            status: 401,
            error: error,
          };
        }
      };
}

module.exports = AlbumService;