import express from 'express';
import { registerTeacher } from '../CONTROLLER/teacher_controller.js';

const router = express.Router();

router.post('/teachers', registerTeacher);

export default router;
