import studentModel from '../models/studentDetails.js';
//import { v4 as uuidv4 } from 'uuid';

let students = [];

export const getStudents = async function (req, res) {
    try {
        const studentsM = await studentModel.find();

        res.status(200).json(studentsM);
    }
    catch (error){
        res.status(404).json({message: error.message});
    }
    //res.send(students);
}

export const setStudent = async function (req, res) {
    const student = req.body;
    //student.id = uuidv4;
    //students.push({ ...student, id: uuidv4() });
    //res.send(`Student with the name ${student.firstName} added to the database!`);

    const newStudent = new studentModel(student);

    try{
        await newStudent.save();
        res.status(201).json(newStudent)
    }
    catch (error){
        res.status(409).json({message: error.message});
    }
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