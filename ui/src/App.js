import React, { memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '#components/Navbar';
import Footnote from '#components/Footnote';
import './App.css';

import Home from '#pages/Home';
import Compare from '#pages/Compare';
import JobTitleDirectory from '#pages/JobTitleDirectory';
import AboutMe from '#pages/AboutMe';
import AddSalary from '#pages/AddSalary';
import SalarySubmission from '#pages/SalarySubmission';
import JobListPage from '#pages/JobListPage';

const Layout = memo(({ children }) => {
    console.log('🔄 Layout Component Rendered');
    return (
        <div className="page-container">
            <Navbar />
            <div className="content">{children}</div>
            <Footnote />
        </div>
    );
});

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/job-title-directory" element={<JobTitleDirectory />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/add-salary" element={<AddSalary />} />
                    <Route path="/salary-submission" element={<SalarySubmission />} />
                    <Route path="/jobs" element={<JobListPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
