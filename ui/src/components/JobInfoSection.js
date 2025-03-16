import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '#styles/JobInfoSection.css';
import Pagination from '#components/Pagination';

const JobInfoSection = ({ filterTitle = '' }) => {
    const jobsPerPage = 10;
    const [expandedRow, setExpandedRow] = useState(null);
    const [jobData, setJobData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const contentRefs = useRef({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://localhost:5001/api/jobs';
                if (filterTitle) {
                    url = `http://localhost:5001/api/jobs?title=${encodeURIComponent(filterTitle)}`;
                }
                console.log('Fetching jobs from:', url);
                const response = await axios.get(url);
                setJobData(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        fetchData();
    }, [filterTitle]);

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const totalPages = Math.ceil(jobData.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <div className="job-info-section">
            <div className="table-container">
                <table className="job-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Job Title</th>
                            <th>Industry</th>
                            <th>Experience</th>
                            <th>Base Salary</th>
                            <th>Total Compensation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentJobs.map((job) => {
                            const isExpanded = expandedRow === job.id;
                            return (
                                <React.Fragment key={job.id}>
                                    <tr className="table-row" onClick={() => toggleRow(job.id)}>
                                        <td>
                                            <div className="arrow-and-company">
                                                <FontAwesomeIcon
                                                    icon={isExpanded ? faChevronUp : faChevronDown}
                                                    className="expand-icon"
                                                />
                                                <div className="company-info">
                                                    <span className="company-name">{job.company || 'N/A'}</span>
                                                    <span className="company-location">
                                                        {job.location || 'Unknown'}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{job.title || 'Unknown'}</td>
                                        <td>{job.industry || 'Not Specified'}</td>
                                        <td>{job.experience || 'N/A'}</td>
                                        <td>${job.baseSalary?.toLocaleString() || 'N/A'}</td>
                                        <td>${job.total?.toLocaleString() || 'N/A'}</td>
                                    </tr>
                                    <tr className="detail-row">
                                        <td colSpan="6">
                                            <div
                                                ref={(el) => (contentRefs.current[job.id] = el)}
                                                className="job-detail-content-wrapper"
                                                style={{
                                                    maxHeight: isExpanded
                                                        ? `${contentRefs.current[job.id]?.scrollHeight}px`
                                                        : '0px',
                                                    transition: 'max-height 0.4s ease-in-out, padding 0.3s ease-in-out'
                                                }}
                                            >
                                                <div className="job-detail-content">
                                                    <p>
                                                        <strong>Company Size:</strong> {job.companySize || 'N/A'}
                                                    </p>
                                                    <p>
                                                        <strong>Employment Type:</strong> {job.employmentType || 'N/A'}
                                                    </p>
                                                    <p>
                                                        <strong>Remote:</strong> {job.remote ? 'Yes' : 'No'}
                                                    </p>
                                                    <p>
                                                        <strong>Work Hours Per Week:</strong>{' '}
                                                        {job.workingHours || 'Unknown'}
                                                    </p>
                                                    <p>
                                                        <strong>Stock Options:</strong>{' '}
                                                        {job.stockOptions ? 'Yes' : 'No'}
                                                    </p>
                                                    <p>
                                                        <strong>Skills:</strong>{' '}
                                                        {job.skills?.join(', ') || 'Not Provided'}
                                                    </p>
                                                    <p>
                                                        <strong>Work-Life Balance:</strong>{' '}
                                                        {job.workLifeBalance || 'N/A'} ⭐
                                                    </p>
                                                    <p>
                                                        <strong>Job Satisfaction:</strong>{' '}
                                                        {job.jobSatisfaction || 'N/A'} ⭐
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            )}
        </div>
    );
};

export default JobInfoSection;
