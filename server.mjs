//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';


//Initialization
dotenv.config();
connectDB();

//Variable declaration
const app = express();
const PORT = process.env.PORT || 3001;

//MiddleWare


//Routes


//Listener
app.listen(PORT, (reqs, resp)=>{

    console.log(`Server is running on PORT: ${PORT}`);

})

