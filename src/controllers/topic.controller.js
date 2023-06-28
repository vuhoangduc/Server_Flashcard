const TopicService = require('../services/topic.services')


class TopicController{

    CreateTopic = async (req,res,next)=> {
        res.send(await TopicService.CreateTopic(req.body));
    }

    GetAll = async (req,res,next) =>{
        res.send(await TopicService.GetAll());
    }


}

module.exports = new TopicController;