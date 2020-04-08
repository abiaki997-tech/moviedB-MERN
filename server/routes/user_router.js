const express = require('express');
const router = express.Router();
const {loginValidation}  = require('../validation/user/validation');
const User = require('../models/user_model')
const auth = require('../middleware')

//register router
router.post('/register',async(req,res)=>{


const name =  req.body.data.firstName;

  const {email,password} = req.body.data;

  try {
     
    let user = await User.findOne({email})

    if(user){
      return res.status(401).json({error:'user already exist'})
    }

    //db saving
     user = new User({
      name,
      email,
      password
    })
   await user.save();

 const token = await user.generateToken()
 return res.status(201).json({message:'succesfull registerd',user,token})  

  }
catch (error) {

     res.status(500).json({error:'server error'})
  }
});


//login router
router.post('/login',async(req,res)=>{
console.log(req.body)
  const {email,password} = req.body.data;
try{
 let user = await User.findByCredtionals(email,password)

 if(!user){
   return res.status(401).json({error:'Unable to login'})
 }
  
  let token =await user.generateToken()

   res.cookie('auth',token,{
    httpOnly: true,
    // secure: true,
    sameSite: true,
   });
   res 
     .status(200)
     .json({message:'Successfully login'})
}
catch(error){

  return res.status(500).json({error:'server error'})
}
});

router.post('/logout',auth,async(req,res)=>{

  try {
    req.user.tokens=[]
    await req.user.save()
    res.clearCookie('auth')
    res.status(200).send({message:'successfully logout'})
    
  } catch (error) {
    res.status(500).send({error:'server error'})
  }

})

module.exports= router;