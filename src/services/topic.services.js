const topicSchema = require('../models/topic.model');


class TopicController {
    static CreateTopic = async ({ title }) => {
        await topicSchema.create({ topic_title:title })
            .then((result) => {
                return {
                    message: 'Tạo thành công topic mới',
                    status: 201,
                    result: result // Include the created topic in the response
                };
            })
            .catch(error => {
                return {
                    message: 'Tạo mới thất bại',
                    status: 401,
                    error: error // Include the error in the response
                };
            });
    }

    static GetAll = async() =>{
        const topics = await topicSchema.find({});
        console.log(topics);
        return {
            message:'lấy thành công',
            status:200,
            topics
        }
    }
}

module.exports = TopicController