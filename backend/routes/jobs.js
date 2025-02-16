import { Router } from 'express';

const jobRouter = Router();

jobRouter.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            company: 'Google',
            location: 'Mountain View, CA',
            experience: '2-4 years',
            baseSalary: '150,000',
            total: '225,000'
        },
        {
            id: 2,
            company: 'Microsoft',
            location: 'Redmond, WA',
            experience: '3-5 years',
            baseSalary: '140,000',
            total: '200,000'
        },
        {
            id: 3,
            company: 'Amazon',
            location: 'Seattle, WA',
            experience: '2-3 years',
            baseSalary: '130,000',
            total: '210,000'
        },
        {
            id: 4,
            company: 'Facebook',
            location: 'Menlo Park, CA',
            experience: '4-6 years',
            baseSalary: '160,000',
            total: '240,000'
        },
        {
            id: 5,
            company: 'Apple',
            location: 'Cupertino, CA',
            experience: '3-5 years',
            baseSalary: '155,000',
            total: '230,000'
        },
        {
            id: 6,
            company: 'Netflix',
            location: 'Los Gatos, CA',
            experience: '2-4 years',
            baseSalary: '145,000',
            total: '220,000'
        },
        {
            id: 7,
            company: 'Uber',
            location: 'San Francisco, CA',
            experience: '3-5 years',
            baseSalary: '135,000',
            total: '205,000'
        },
        {
            id: 8,
            company: 'Airbnb',
            location: 'San Francisco, CA',
            experience: '2-4 years',
            baseSalary: '140,000',
            total: '215,000'
        },
        {
            id: 9,
            company: 'Salesforce',
            location: 'San Francisco, CA',
            experience: '3-5 years',
            baseSalary: '150,000',
            total: '225,000'
        },
        {
            id: 10,
            company: 'Oracle',
            location: 'Redwood City, CA',
            experience: '2-4 years',
            baseSalary: '130,000',
            total: '200,000'
        }
    ]);
});

export { jobRouter };
