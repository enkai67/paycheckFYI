import { Link } from 'react-router-dom';
import styles from './TitleDirectory.css';

const jobData = [
    'Software Engineer',
    'Data Scientist',
    'Product Manager',
    'UI/UX Designer',
    'Backend Engineer',
    'AI Researcher',
    'DevOps Engineer',
    'Cybersecurity Analyst',
    'Full Stack Developer',
    'Machine Learning Engineer',
    'Cloud Architect',
    'QA Engineer'
];

const TitleDirectory = () => {
    return (
        <div className={styles.titleDirectory}>
            <h1>Title Directory</h1>
            <p>Browse all available job titles.</p>

            <div className={styles.jobListContainer}>
                <ul className={styles.jobList}>
                    {jobData.map((job, index) => (
                        <li key={index} className={styles.jobTitle}>
                            {job}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Back Button */}
            <Link to="/" className={styles.backButton}>
                ← Back to Home
            </Link>
        </div>
    );
};

export default TitleDirectory;
