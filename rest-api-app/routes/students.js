import express from 'express';

const router = express.Router();

router.get('/students', (req, res) => {
    res.send('Hello from student route');
});

export default router;