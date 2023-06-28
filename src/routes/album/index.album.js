
const express = require('express');
const router = express.Router()
const AlbumController = require('../../controllers/album.controller');

router.post('/create',AlbumController.CreateNew)

module.exports = router;