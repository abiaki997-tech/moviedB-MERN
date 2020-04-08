const {login} = require('./schema');

module.exports={

  loginValidation:async(req,res,next)=>{

console.log(req.body.data)
    
    const value  = await login.validate(req.body.data)

      if(value.error){

      return res.status(402).json({ message:value.error.details[0].message  });

      }  
      else{
        console.log('validation pass')
        next();
      }
  }
};