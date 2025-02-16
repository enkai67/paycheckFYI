import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '#styles/JobInfoSection.css';
import { getJobs } from '#apis/index';

const JobInfoSection = () => {
    // Track the currently expanded row (null = none)
    const [expandedRow, setExpandedRow] = useState(null);
    const [jobData, setJobData] = useState([]);

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    // Fetch job data on component mount
    useEffect(() => {
        const fetchData = async () => {
            const jobs = await getJobs();
            setJobData(jobs.slice(0, 10));
        };

        fetchData();
    }, []);

    return (
        <div className="job-info-section">
            <div className="table-container">
                <table className="job-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Years of Experience</th>
                            <th>Base Salary</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobData.map((job) => {
                            const isExpanded = expandedRow === job.id;
                            return (
                                <React.Fragment key={job.id}>
                                    {/* Main row (always visible) */}
                                    <tr className="table-row" onClick={() => toggleRow(job.id)}>
                                        <td>
                                            <div className="arrow-and-company">
                                                <FontAwesomeIcon
                                                    icon={isExpanded ? faChevronUp : faChevronDown}
                                                    className="expand-icon"
                                                />
                                                <div className="company-info">
                                                    <span className="company-name">{job.company}</span>
                                                    <span className="company-location">{job.location}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{job.experience}</td>
                                        <td>${job.baseSalary}</td>
                                        <td>${job.total}</td>
                                    </tr>

                                    {/* Detail row (always in the DOM for smooth animation) */}
                                    <tr className="detail-row">
                                        <td colSpan="4">
                                            <div className={'job-detail-content-wrapper ' + (isExpanded ? 'expanded' : '')}>
                                                <div className="job-detail-content">
                                                    <p>
                                                        <strong>Years of Experience:</strong> {job.experience}
                                                    </p>
                                                    <p>
                                                        <strong>Company:</strong> {job.company}
                                                    </p>
                                                    <p>
                                                        <strong>Total Compensation:</strong> ${job.total}
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
        </div>
    );
};

export default JobInfoSection;
