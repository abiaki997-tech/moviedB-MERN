require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user_model')



const auth = async(req,res,next)=>{
console.log(req)
  try {
   
    const token = req.cookies.auth;
    console.log('tokenverify ' + token);
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    const user = await User.findOne({_id:decoded._id})

    if(!user){
      throw new Error()
    };
    
    req.token=token //send token to req.token
    req.user=user  // send user for route handlers
    next()
    
  } catch (error) {
    res.status(401).send({error:'Please auth'})
  }


}

module.exports = auth;