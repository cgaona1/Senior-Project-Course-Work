import { v4 as uuidv4 } from 'uuid';

let students = [];

export const getStudents = function (req, res) {
    res.send(students);
}

export const setStudent = function (req, res) {
    const student = req.body;

    students.push({ ...student, id: uuidv4() });

    res.send(`Student with the name ${student.firstName} added to the database!`);
}

export const getStudent = function (req, res) {
    const { id } = req.params;

    const student = students.find((student) => student.id === id);

    res.send(student);
}

export const updateStudent = function (req, res) {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const student = students.find((student) => student.id === id);

    if (firstName) student.firstName = firstName;
    if (lastName) student.lastName = lastName;

    res.send(`Student with the id ${id} has been updated!`);
}

export const deleteStudent = function (req, res) {
    const { id } = req.params;

    students = students.filter((student) => student.id !== id);

    res.send(`Student with the id ${id} has been deleted!`);
}