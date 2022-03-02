import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let students = []

router.route('/')
    .get(function (req, res) {
        res.send(students);
    })
    .post(function (req, res) {
        const student = req.body;

        students.push({ ...student, id: uuidv4() });

        res.send(`User with the name ${student.firstName} added to the database!`);
    });

router.route('/:id')
    .get(function (req, res){
        const { id } = req.params

        const foundUser = students.find((student) => student.id === id);

        res.send(foundUser);
    })
    .delete(function (req, res) {
        const { id } = req.params;

        students = students.filter((student) => student.id !== id);

        res.send(`User with the id ${ id } has been deleted!`);
    });


export default router;