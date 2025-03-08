import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobInfoSection from '#components/JobInfoSection';
import { getJobs } from '#apis/index';
import '#styles/JobListPage.css';
import '#styles/JobInfoSection.css';

const JobListPage = () => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title') || '';
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const jobs = await getJobs(title);
            setJobData(jobs);
        };

        fetchJobs();
    }, [title]);

    return (
        <div className="job-list-page">
            <h2>Job Listings for "{title}"</h2>

            {/* ✅ Scrollable Table Wrapper */}
            <div className="job-table-scroll-wrapper">
                <JobInfoSection jobData={jobData} />
            </div>
        </div>
    );
};

export default JobListPage;
