import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* Top Nav Bar */}
            <nav className="navbar">
                <div className="navbar-inner">
                    {/* Logo on the left */}
                    <Link to="/" className="logo">
                        PAYCHECK.FYI
                    </Link>
                    {/* Hamburger flush-right */}
                    <button className="hamburger" onClick={toggleMenu}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </nav>

            {/* Push-down menu with animation */}
            <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/compare" onClick={closeMenu}>
                            COMPARE
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-me" onClick={closeMenu}>
                            ABOUT ME
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
