import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClock } from '@fortawesome/free-solid-svg-icons';
import { getSalaries } from '#apis/index';
import '#styles/SalarySection.css';

const SalarySection = () => {
    const [salaryData, setSalaryData] = useState([]);

    // Fetch salaries on component mount
    useEffect(() => {
        const fetchData = async () => {
            const salaries = await getSalaries();
            setSalaryData(salaries.slice(0, 5));
        };

        fetchData();
    }, []);

    return (
        <div className="salary-section">
            <div className="salary-scroll-container">
                {/* Add Salary Block */}
                <div className="salary-wrapper">
                    <Link to="/add-salary" className="salary-card add-salary">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faPlus} className="add-icon" />
                        </div>
                        <p>Add Salary</p>
                    </Link>
                </div>

                {/* Render Salary List */}
                {salaryData.length > 0 ? (
                    salaryData.map((entry, index) => (
                        <div key={index} className="salary-wrapper">
                            <div className="updated-time">
                                <FontAwesomeIcon icon={faClock} className="clock-icon" />
                                <span>{entry.updatedTime}</span>
                            </div>
                            <div className="salary-card">
                                <p className="salary-amount">{entry.salary}</p>
                                <p className="salary-job">{entry.jobTitle}</p>
                                <p className="salary-city">{entry.city}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading salaries...</p>
                )}
            </div>

            {/* "View All" Button */}
            <Link to="/salaries" className="view-all-button">
                View All &gt;
            </Link>
        </div>
    );
};

export default SalarySection;
