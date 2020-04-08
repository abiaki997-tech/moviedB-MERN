require('dotenv').config();

const mongoose  = require ('mongoose');
const uri =process.env.URL

async function connectDB (){
  try{
    await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,     
            useCreateIndex:true
    });
    console.log('Connected-DB')
  }
  catch(error){
    console.log(error.message);
    process.exit(1);
  }
 
};

module.exports = connectDB;