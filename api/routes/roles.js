import { Router } from 'express';
import rolesController from '../controllers/roles.js';
import authMiddleware from '../middleware/auth.js';

const roles = Router();

roles.get('/', rolesController.getRoles);
roles.post('/', authMiddleware, rolesController.createRole);
roles.get('/companies', (req, res) => {
    res.json([
        {
            name: 'Google',
            roles: [
                {
                    title: 'Software Engineer',
                    base: 150000,
                    bonus: 20000,
                    stock: 50000
                },
                {
                    title: 'Senior Software Engineer',
                    base: 180000,
                    bonus: 25000,
                    stock: 70000
                }
            ]
        },
        {
            name: 'Amazon',
            roles: [
                {
                    title: 'SDE II',
                    base: 130000,
                    bonus: 15000,
                    stock: 40000
                }
            ]
        }
    ]);
})

export default roles;
