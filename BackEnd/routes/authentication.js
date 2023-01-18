
const express = require('express')
const user = require('../models/userModel')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')
const router = express.Router()

//create user endpoint
router.post('/user/createuser', [
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)
        const User = await user.create({ name, email, password: hash })
        res.json(User)

    } catch (error) {
        res.send("Internal server error")
    }

})

//create login endpoint
router.post('/user/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let success = false
    try {
        const {email, password} = req.body
        const User = await user.findOne({email})
        if(!User){
            return res.json({"success":success})
        }
        const pass = await bcrypt.compare(password,User.password)
        if(pass){
            const data = {
                user:User._id
            }
            success = true
            const token = jwt.sign(data,"hellothisismyprojectbillmanagementsystem")
            res.json({"success":success,"token":token})    
        }
        else{
            return res.json({"success":success})
        }
    } catch (error) {
        res.status(400).send("Internal server error")
        console.log(error)
    }
})


//fetch userdetails through token
router.post('/user/fetchuser',fetchuser,async(req,res)=>{
    try {
        
        const userId = req.user
        const User = await user.findById(userId).select('-password')
        res.json(User)
    } catch (error) {
        res.status(400).send("Internal server error")
    }
})

module.exports = router