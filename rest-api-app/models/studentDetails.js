import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    id: String
});

const studentModel = mongoose.model('Student', studentSchema);

export default studentModel;