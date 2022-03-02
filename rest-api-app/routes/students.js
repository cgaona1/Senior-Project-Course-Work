import express from 'express';
import { getStudents, 
        setStudent, 
        getStudent, 
        updateStudent,
        deleteStudent } from '../controllers/students.js';

const router = express.Router();

//route for /student
router.route('/')
    .get(getStudents)
    .post(setStudent);

//route for /student/:id
router.route('/:id')
    .get(getStudent)
    .patch(updateStudent)
    .delete(deleteStudent);


export default router;