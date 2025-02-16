import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '#styles/Home.css';

const HeroSection = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="hero">
            <h1 className="hero-title">Get Paid, Not Played</h1>
            <p className="hero-subtitle">Insights on companies, salaries, jobs, and more!</p>

            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search for a company or job title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default HeroSection;
