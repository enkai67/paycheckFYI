import { Link } from 'react-router-dom';
import '#styles/TitleDirectory.css';

const jobCategories = {
    'Engineering Roles': [
        'Software Engineer',
        'Backend Engineer',
        'Full Stack Developer',
        'Machine Learning Engineer',
        'Cloud Architect',
        'QA Engineer',
        'DevOps Engineer'
    ],
    'Data & AI Roles': ['Data Scientist', 'AI Researcher'],
    'Product & Design': ['Product Manager', 'UI/UX Designer'],
    Security: ['Cybersecurity Analyst']
};

const TitleDirectory = () => {
    return (
        <div className="title-directory">
            <h1>Job Title Directory</h1>
            <p>Browse categorized job titles below.</p>

            <div className="title-directory-container">
                {Object.entries(jobCategories).map(([category, jobs]) => (
                    <div key={category} className="title-directory-category">
                        <h2 className="title-directory-category-title">{category}</h2>
                        <ul className="title-directory-job-list">
                            {jobs.map((job, index) => (
                                <li key={index} className="title-directory-job-title">
                                    {job}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Back Button */}
            <Link to="/" className="title-directory-back-button">
                ← Back to Home
            </Link>
        </div>
    );
};

export default TitleDirectory;
