//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import cors from 'cors';
import playerRoutes from './routes/playerRoutes.mjs';
import dungeonRoutes from './routes/dungeonRoutes.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';
import userRoutes from './routes/userRoutes.mjs';
import combatRoutes from './routes/combatRoutes.mjs';


//Initialization
dotenv.config();
connectDB();


//Variable declaration
const app = express();
const PORT = process.env.PORT || 5001;


//MiddleWare
app.use(cors());
app.use(express.json());
app.use(errorHandler);



//Routes
app.use('/api/players', playerRoutes);
app.use('/api/dungeons', dungeonRoutes);
app.use('/api/users', userRoutes);
app.use('/api/combat', combatRoutes);


//Listener
app.listen(PORT, (reqs, resp) => {

    console.log(`Server is running on PORT: ${PORT}`);

})

