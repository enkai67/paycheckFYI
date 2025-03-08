import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JOB_TITLES, JOB_CATEGORIES } from '#constants';
import '#styles/JobTitleDirectory.css';

const JobTitleDirectory = () => {
    const navigate = useNavigate();

    const handleJobClick = (jobTitle) => {
        console.log(`Navigating to /jobs?title=${encodeURIComponent(jobTitle)}`);
        navigate(`/jobs?title=${encodeURIComponent(jobTitle)}`);
    };

    return (
        <div className="title-directory">
            <h1>Job Title Directory</h1>
            <p>Browse job titles by category.</p>

            {/* ✅ Display Categories with Job Titles Underneath */}
            <div className="title-directory-container">
                {Object.entries(JOB_CATEGORIES).map(([key, category]) => (
                    <div key={category.description} className="title-directory-category">
                        <h3 className="title-directory-category-title">{category.description}</h3>
                        <ul className="title-directory-job-list">
                            {JOB_TITLES[category].map((title) => (
                                <li
                                    key={title}
                                    onClick={() => handleJobClick(title)}
                                    className="title-directory-job-title"
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* ✅ Back Button */}
            <button className="title-directory-back-button" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
};

export default JobTitleDirectory;
