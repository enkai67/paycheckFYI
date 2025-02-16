import { Router } from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../models/User';

const auth = Router();

auth.post('/login', async (req, res) => {
    // const { email, password } = req.body;

    // const user = await User.findByEmail(email);
    // if (!user || user.password !== password) {
    //     return res.status(400).json({ message: 'Invalid credentials' });
    // }

    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // res.json({ token });
});

export default auth;
