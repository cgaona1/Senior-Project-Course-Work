import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import studentsRoutes from './routes/students.js';

const app = express();
const PORT = 3000;

//Database connection
const CONNECTION_URL = 'mongodb+srv://cgaona:cgaona123@cluster0.upe4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));

app.use(bodyParser.json());
app.use('/students', studentsRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.');
});

//app.listen(PORT, () => console.log(`Server running on port: http://localhost${PORT}`));