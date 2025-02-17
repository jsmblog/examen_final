import express from 'express';
import { getAllStudents, registerStudent } from '../CONTROLLER/student_controller.js';

const router = express.Router();

router.get('/students', getAllStudents);
router.post('/students', registerStudent);

export default router;
