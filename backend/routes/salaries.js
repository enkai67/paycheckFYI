import { Router } from 'express';

const salaries = Router();

salaries.get('/', (req, res) => {
    res.json([
        {
            salary: '$80,000',
            jobTitle: 'Software Engineer',
            city: 'San Francisco',
            updatedTime: '2 hours ago'
        },
        {
            salary: '$70,000',
            jobTitle: 'Data Analyst',
            city: 'New York',
            updatedTime: '1 day ago'
        },
        {
            salary: '$90,000',
            jobTitle: 'DevOps Engineer',
            city: 'Austin',
            updatedTime: '30 minutes ago'
        },
        {
            salary: '$85,000',
            jobTitle: 'Frontend Developer',
            city: 'Los Angeles',
            updatedTime: '3 hours ago'
        },
        {
            salary: '$95,000',
            jobTitle: 'Backend Developer',
            city: 'Seattle',
            updatedTime: 'Just now'
        }
    ]);
});

export default salaries;
