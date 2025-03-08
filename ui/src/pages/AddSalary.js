import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '#configs';
import { QRCodeCanvas } from 'qrcode.react';
import '#styles/AddSalary.css';

const AddSalary = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        jobTitle: '',
        company: '',
        location: '',
        salary: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // ✅ Send data to the backend
            await axios.post(`${API_URL}/salaries`, formData);
            console.log('Submitted Data:', formData);

            // ✅ Redirect to Salary Submission Page
            navigate('/salary-submission');
        } catch (error) {
            console.error('Error submitting salary:', error);
        }
    };

    return (
        <div className="add-salary-page">
            <h2>Share Your Salary Information</h2>

            <form onSubmit={handleSubmit} className="salary-form">
                <label>
                    Job Title:
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                </label>
                <label>
                    Company:
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </label>
                <label>
                    Salary:
                    <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
                </label>
                <label>
                    Additional Info:
                    <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>

            {/* QR Code Section */}
            <div className="qr-code">
                <h3>Scan this QR Code</h3>
                <QRCodeCanvas value={`${API_URL}/add-salary`} size={50} />
            </div>
        </div>
    );
};

export default AddSalary;
