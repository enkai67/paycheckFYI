import React, { useState, useEffect } from 'react';
import { getJobs } from '#apis/index';
import '#styles/MoreJobs.css';

const MoreJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const jobData = await getJobs();
            setJobs(jobData);
        };
        fetchData();
    }, []);

    return (
        <div className="more-jobs-page">
            <h1>Job Listings</h1>
            <div className="job-list-container">
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <div key={index} className="job-card">
                            <h2>{job.title}</h2>
                            <p>
                                <strong>Company:</strong> {job.company}
                            </p>
                            <p>
                                <strong>Location:</strong> {job.location}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Loading jobs...</p>
                )}
            </div>
        </div>
    );
};

export default MoreJobs;
