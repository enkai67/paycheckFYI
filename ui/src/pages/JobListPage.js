import React from 'react';
import { useSearchParams } from 'react-router-dom';
import JobInfoSection from '#components/JobInfoSection';
import '#styles/JobListPage.css';

const JobListPage = () => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title') || '';

    return (
        <div className="job-list-page">
            <h2>Job Listings for {title}</h2>
            <div className="job-table-scroll-wrapper">
                <JobInfoSection filterTitle={title} />
            </div>
        </div>
    );
};

export default JobListPage;
