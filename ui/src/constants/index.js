export const JOB_CATEGORIES = {
    Engineering: Symbol('Engineering'),
    DataAI: Symbol('Data & AI'),
    ProductDesign: Symbol('Product & Design'),
    Security: Symbol('Security'),
    Development: Symbol('Development')
};

export const JOB_TITLES = {
    [JOB_CATEGORIES.Engineering]: [
        'Software Engineer',
        'Backend Developer',
        'Frontend Developer',
        'DevOps Engineer',
        'Full-Stack Developer'
    ],
    [JOB_CATEGORIES.DataAI]: [
        'Data Scientist',
        'Machine Learning Engineer',
        'AI Researcher',
        'Data Engineer'
    ],
    [JOB_CATEGORIES.ProductDesign]: [
        'Product Manager',
        'UX Designer',
        'UI Designer',
        'Design Engineer'
    ],
    [JOB_CATEGORIES.Security]: [
        'Cybersecurity Analyst',
        'Penetration Tester',
        'Security Engineer'
    ],
    [JOB_CATEGORIES.Development]: [
        'Embedded Systems Developer',
        'Game Developer',
        'Software Architect'
    ],
};
