const express = require('express')
const router  = express.Router()
const Users = require('../Model/userModel')

//  Add data to the database
router.post('/', async(req, res)=>{
    const {userId, hashedPassword, firstName, dobDay, dobMonth, dobYear, showGender, genderIdentity, genderInterest, email, url, about, matches: [userId1, userId2]} = req.body

    // Add data
    const createUser = await Users.create({userId, hashedPassword, firstName, dobDay, dobMonth, dobYear, showGender, genderIdentity, genderInterest, email, url, about, matches: [userId1, userId2] })
    res.status(200).json({msg: 'account created succesfully', createUser})
})
router.get('/', (req, res)=>{
    res.json({msg: "Hello World!"})
})

// Delete User
router.delete('/del/:id', async(req, res)=>{
    const {id} = req.params
    const deleteUser = await Users.findByIdAndDelete({_id: id})
    res.status(200).json({msg: "User deleted"})
})


module.exports = router