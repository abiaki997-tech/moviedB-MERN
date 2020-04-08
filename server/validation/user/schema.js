

const Joi = require('@hapi/joi');

const schema = {
  login:Joi.object({
    email:Joi.string()
             .empty()
             .email()
            .message({
              'string.empty': `Email cannot be an empty field`,
              'string.email': `Enter a valid Email`
            })
            ,
   
           
    password:Joi.string()
          .empty()
          .min(8)
          .required()
          // .pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*-]).{8,}$")).
          //  message('Password atleast one small/Captial/number/special charcter')
          .messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `Password cannot be an empty field`,
            'string.min': `Password should have  minimum length of {#limit}`,
            'any.required': `Password is a required field`,
            'any.pattern':`Password Some atleast one small/captial/number/special charcter`
          })

           
  })
};

module.exports = schema;



