import studentModel from '../models/studentDetails.js';

export const getStudents = async function (req, res) {
    try {
        const studentsM = await studentModel.find();

        res.status(200).json(studentsM);
    }
    catch (error){
        res.status(404).json({message: error.message});
    }
}

export const setStudent = async function (req, res) {
    const student = req.body;

    const newStudent = new studentModel(student);

    try{
        await newStudent.save();
        res.status(201).json(newStudent)
    }
    catch (error){
        res.status(409).json({message: error.message});
    }
}

export const getStudent = async function (req, res) {
    const { id } = req.params;

    try {
        const student = await studentModel.findById(id);
        res.status(200).json(student);
    }
    catch (error){
        res.status(404).json({message: error.message});
    }
}

export const updateStudent = async function (req, res) {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    try{
        if (firstName) await studentModel.findByIdAndUpdate(id, {firstName: firstName});
        if (lastName) await studentModel.findByIdAndUpdate(id, {lastName: lastName});
        res.status(201).json(getStudent);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
    
}

export const deleteStudent = async function (req, res) {
    const { id } = req.params;

    try{
        await studentModel.findByIdAndDelete(id);
        res.status(201).json(getStudents);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}