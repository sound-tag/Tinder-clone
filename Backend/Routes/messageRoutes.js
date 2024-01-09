const express = require('express')
const router  = express.Router()
const Users = require('../Model/messageModel')

//  to send message
router.post('/', async(req, res)=>{
    const {frommUserId, toUserId, message} = req.body

    // send message
    const createMessage = await Users.create({frommUserId, toUserId, message })
    res.status(200).json({msg: 'Message sent succesfully', createMessage})
})


module.exports = router