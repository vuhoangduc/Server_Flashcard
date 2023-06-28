
const express = require('express');
const topicController = require('../../controllers/topic.controller');

const router = express.Router();

router.post('/create',topicController.CreateTopic);
router.get('/all',topicController.GetAll);




module.exports = router;


