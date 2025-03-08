import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '#pages/Home';
import Compare from '#pages/Compare';
import TitleDirectory from '#pages/TitleDirectory';
import AboutMe from '#pages/AboutMe';
import AddSalary from '#pages/AddSalary';
import Navbar from '#components/Navbar';
import Footnote from '#components/Footnote';
import SalarySubmission from '#pages/SalarySubmission';
import './App.css';

function App() {
    return (
        <Router>
            <div className="page-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/compare" element={<Compare />} />
                        <Route path="/title-directory" element={<TitleDirectory />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/add-salary" element={<AddSalary />} />
                        <Route path="/salary-submission" element={<SalarySubmission />} />
                    </Routes>
                </div>
                <Footnote />
            </div>
        </Router>
    );
}

export default App;
