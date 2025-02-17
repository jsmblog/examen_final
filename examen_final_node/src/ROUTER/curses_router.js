import express from 'express';
import { addCourse, getAllCourses } from '../CONTROLLER/curses_controller.js';

const router = express.Router();
router.get('/courses', getAllCourses);
router.post('/courses', addCourse);

export default router;
