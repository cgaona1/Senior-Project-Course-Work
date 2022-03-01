import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const students = [
    {
        firstName: "Chris",
        lastName: "Gaona"
    },
    {
        firstName: "Flor",
        lastName: "Gonzalez"
    }
]

router.route('/students')
    .get(function (req, res) {
        res.send(students);
    })
    .post(function (req, res) {
        const student = req.body;

        students.push({ ...student, id: uuidv4() });

        res.send(`User with the name ${student.firstName} added to the database!`);
    });


export default router;