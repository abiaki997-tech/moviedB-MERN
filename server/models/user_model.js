const mongoose = require('mongoose');
require('dotenv').config()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Schema
const userSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  },

  tokens:[{
      token:{
        type:String,
        required:true
      }
  }]


})

//token generate (jwt)
userSchema.methods.generateToken = async function(){

 
  const user = this

  const token = jwt.sign({_id: user._id.toString()},process.env.JWT_SECRET)
  
  user.tokens = user.tokens.concat({ token })
  
  await user.save()

  return token
};

// hash generate before save(bcrypt)
userSchema.pre('save',async function (next){
const user = this

  if(user.isModified('password')) //hashed checking once
  {
  user.password =  await bcrypt.hash(user.password,8)
  }
next()
});

//login credtionals
userSchema.statics.findByCredtionals=async(email,password)=>{
  
 const user = await User.findOne({email})

 if(!user){
   return user
 };

 const passwordVerify = await bcrypt.compare(password,user.password)

 
 if(!passwordVerify){
   return passwordVerify
 };


 return user;
}



const User = mongoose.model('User',userSchema);

module.exports = User;