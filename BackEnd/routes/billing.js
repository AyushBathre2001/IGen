
const express = require('express')
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const billModel = require('../models/billModel');

const router = express.Router()

//store purchase into database
router.post('/customer/save',[
    body('name').isLength({min:5}),
  
],fetchuser,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {name,number,products,amount} = req.body
        const bill = await billModel.create({name,number,products,amount})
        res.send("OK")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router