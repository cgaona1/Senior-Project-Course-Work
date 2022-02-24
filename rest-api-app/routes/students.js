import express from 'express';

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
        console.log(students);
        res.send('Hello from student route');
    })
    .post(function (req, res) {
        console.log('Route Reached');
        res.send('Route Reached');
    });


export default router;