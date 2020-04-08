const express = require ('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')
const connectDB = require('./db');


//connect db
connectDB();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 
};

app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));



const PORT = process.env.PORT || 5000;

app.use('/auth',require('./routes/user_router'));

app.listen(PORT,()=>{
  console.log('Server Up '+PORT)
});