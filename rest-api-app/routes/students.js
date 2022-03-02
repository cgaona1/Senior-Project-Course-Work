import express from 'express';
import { getStudents, 
        setStudent, 
        getStudent, 
        updateStudent,
        deleteStudent } from '../controllers/student.js';

const router = express.Router();

router.route('/')
    .get(getStudents)
    .post(setStudent);

router.route('/:id')
    .get(getStudent)
    .patch(updateStudent)
    .delete(deleteStudent);


export default router;