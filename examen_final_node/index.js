import express from 'express';
import {PORT} from './src/CONFIG/config.js';
import teacherRoutes from './src/ROUTER/teacher_router.js';
import studentRoutes from './src/ROUTER/student_router.js';
import courseRoutes from './src/ROUTER/curses_router.js';
import gradeRoutes from './src/ROUTER/grades_router.js';
import { sequelize } from './src/DB/db_conexion.js';

import cors from 'cors'
const CURRENT_PORT  = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200' , 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials : true
}));
app.use('/api', teacherRoutes);
app.use('/api', studentRoutes);
app.use('/api', courseRoutes);
app.use('/api', gradeRoutes);


const initialize = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connecting...");
        await sequelize.sync({alter: false});
        console.log('Connection has been established successfully.');
        app.listen(CURRENT_PORT, () => {
            console.log(`Server running on port ${CURRENT_PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

initialize();