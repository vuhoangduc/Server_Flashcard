
const express = require('express');
const router = express.Router()
router.get('/',(req,res,next)=>{
    res.send('Hello!!!')
})
router.use('/v1/api/ny',require('./nyManager/ny.index'))









router.use('/v1/api/topic',require('./topics/index'))
router.use('/v1/api/album',require('./album/index.album'))
module.exports = router