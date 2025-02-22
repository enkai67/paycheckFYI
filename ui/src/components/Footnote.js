import React from 'react';
import '#styles/Footnote.css';

const Footnote = () => {
    return (
        <footer className="footnote">
            <div className="footnote-top">
                <div className="logo-and-nav">
                    <img
                        src="/images/logo.png" // Ensure your logo is placed in the public/images folder
                        alt="My Website Logo"
                        className="footnote-logo"
                    />
                    <nav className="footnote-nav">
                        <ul>
                            <li className="footnote-title">
                                <a href="/">paycheck.fyi</a>
                            </li>
                            <li>
                                <a href="/jobs">Jobs</a>
                            </li>
                            <li>
                                <a href="/salaries">Salaries</a>
                            </li>
                            <li>
                                <a href="/companies">Companies</a>
                            </li>
                            <li>
                                <a href="/about-me">About Me</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="footnote-bottom">
                <p>&copy; {new Date().getFullYear()} Paycheck FYI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footnote;
