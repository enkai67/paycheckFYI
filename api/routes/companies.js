import { Router } from 'express';

const companies = Router();

companies.get('/', (req, res) => {
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
});

export default companies;
