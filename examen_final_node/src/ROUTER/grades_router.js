import express from 'express';
import { assignGrade, viewGrades } from '../CONTROLLER/grades_controller.js';

const router = express.Router();

router.post('/grades', assignGrade);

router.get('/grades', viewGrades);

export default router;
