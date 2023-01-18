
const jwt = require('jsonwebtoken')

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        return res.send("Please login using a valid token")
    }
    try {
        const user = jwt.verify(token,"hellothisismyprojectbillmanagementsystem")
        req.user = user.user
        next()

    } catch (error) {
        res.send("Please login using a valid token")
    }
}

module.exports = fetchuser