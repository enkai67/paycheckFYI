import { Link } from 'react-router-dom';
import '#styles/JobScroller.css';

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

const JobScroller = () => {
    return (
        <div className="job-section">
            <div className="job-scroll-wrapper">
                <div className="job-scroll-container">
                    <div className="job-list">
                        {[...jobData, ...jobData, ...jobData].map((job, index) => (
                            <div key={index} className="job-card">
                                {job}
                            </div>
                        ))}
                    </div>
                </div>
                <Link to="/job-title-directory" className="more-button">
                    More &gt;
                </Link>
            </div>
        </div>
    );
};

export default JobScroller;
