
const express = require('express');
const nyController = require('../../controllers/ny.controller');

const router = express.Router();

router.get('/getall',nyController.getAllNy)
router.post('/create',nyController.createNewNy)

router.delete('/delete/:id',nyController.delete)
router.put('/update/:id',nyController.update)




module.exports = router;


