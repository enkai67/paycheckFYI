import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '#styles/JobInfoSection.css';
import { getJobs } from '#apis/index';
import Pagination from '#components/Pagination';

const JobInfoSection = () => {
    const jobsPerPage = 3;
    const [expandedRow, setExpandedRow] = useState(null);
    const [jobData, setJobData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const jobs = await getJobs();
            setJobData(jobs);
        };
        fetchData();
    }, []);

    const totalPages = Math.ceil(jobData.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

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
                                                    <span className="company-name">{job.company}</span>
                                                    <span className="company-location">{job.location}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{job.experience}</td>
                                        <td>${job.baseSalary}</td>
                                        <td>${job.total}</td>
                                    </tr>

                                    <tr className="detail-row">
                                        <td colSpan="4">
                                            <div
                                                className={
                                                    'job-detail-content-wrapper ' + (isExpanded ? 'expanded' : '')
                                                }
                                            >
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

            {/* ✅ Pagination Below Table */}
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export default JobInfoSection;
