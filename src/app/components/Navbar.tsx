"use client";

import React, {useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MoreVert';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
        // closing the menu after the user clicks on a link from the nav bar
    };

    const renderNavLinks: () => React.ReactNode = () => {
        return (
            <>
                <a 
                    href="#AboutMe" 
                    onClick={(e) => handleScroll(e, 'AboutMe')}
                    className="hover:text-gray-300"
                >   
                    About Me
                </a>
                <a 
                    href="#WorkExperience" 
                    onClick={(e) => handleScroll(e, 'WorkExperience')} 
                    className="hover:text-gray-300">Work Experience
                </a>
                <a 
                    href="#Skills" 
                    onClick={(e) => handleScroll(e, 'Skills')} 
                    className="hover:text-gray-300"
                >
                    Skills
                </a>
                <a 
                    href="#Projects" 
                    onClick={(e) => handleScroll(e, 'Projects')} 
                    className="hover:text-gray-300"
                >
                    Projects
                </a>
                <a 
                    href="#Education" 
                    onClick={(e) => handleScroll(e, 'Education')} 
                    className="hover:text-gray-300"
                >
                    Education
                </a>
                <a 
                    href="#ContactForm"
                    onClick={(e) => handleScroll(e, 'ContactForm')} 
                    className="hover:text-gray-300"
                >
                    Contact
                </a>
                
            </>

        )   
    }

    return (
        <nav className="navbar">
            <div className="nav-links">
                {renderNavLinks()}
            </div>

            <div className="hamburger-menu">
                <IconButton onClick={() => setMenuOpen(!menuOpen)} color="inherit">
                    <MenuIcon />
                </IconButton>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                {renderNavLinks()}
            </div>
        </nav>
    );
};

export default Navbar;
