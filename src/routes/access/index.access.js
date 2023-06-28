
const express = require('express');
const { authentivation } = require('../../auth/authUtils');
const accessController = require('../../controllers/access.controller')
const router = express.Router()

router.post('/signup',accessController.signUp)
router.post('/login',accessController.logIn)
// router.use(authentivation);

module.exports = router;