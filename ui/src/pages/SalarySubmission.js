import { Link } from 'react-router-dom';
import '#styles/SalarySubmission.css';

const SalarySubmission = () => {
    return (
        <div className="salary-submission-page">
            <div className="submission-content">
                <h2>Thank You for Contributing!</h2>
                <p>
                    Your salary information has been successfully recorded. <br />
                    By sharing your insights, you're helping others make informed decisions. <br />
                    <strong>Your contribution makes transparency possible!</strong>
                </p>

                <p>Want to explore more salary data?</p>

                <div className="submission-actions">
                    <Link to="/salaries" className="view-salaries">
                        View Salaries
                    </Link>
                    <Link to="/" className="return-home">
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SalarySubmission;
