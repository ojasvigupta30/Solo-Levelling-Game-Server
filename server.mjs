//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import cors from 'cors';
import playerRoutes from './routes/playerRoutes.mjs';
import dungeonRoutes from './routes/dungeonRoutes.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';


//Initialization
dotenv.config();
connectDB();


//Variable declaration
const app = express();
const PORT = process.env.PORT || 5001;


//MiddleWare
app.use(cors());
app.use(express.json({ extended: false }));
app.use(errorHandler);


//Routes
app.use('/api/players', playerRoutes);
app.use('/api/dungeons', dungeonRoutes);


//Listener
app.listen(PORT, (reqs, resp) => {

    console.log(`Server is running on PORT: ${PORT}`);

})

