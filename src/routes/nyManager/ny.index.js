
const express = require('express');
const nyController = require('../../controllers/ny.controller');

const router = express.Router();

router.get('/getall',nyController.getAllNy)
router.post('/create',nyController.createNewNy)




module.exports = router;


