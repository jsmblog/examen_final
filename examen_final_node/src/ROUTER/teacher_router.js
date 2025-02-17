import express from 'express';
import { loginTeacher, registerTeacher ,getAllTeachers} from '../CONTROLLER/teacher_controller.js';

const router = express.Router();

router.post('/login', loginTeacher); 
router.post('/teachers', registerTeacher);
router.get('/teachers', getAllTeachers);

export default router;
