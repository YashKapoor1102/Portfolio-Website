"use client";

import React, {useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MoreVert';

const Navbar: React.FC = () => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsNarrowScreen(window.innerWidth < 770);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);


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
        <nav className={`fixed top-0 w-full flex justify-around ${!isNarrowScreen ? 'p-4' : 'p-0'} bg-gray-800 text-white z-50`}>
            <div className={`flex justify-between w-full ${!isNarrowScreen ? 'px-16' : ''}`}>
                {!isNarrowScreen ? renderNavLinks() : (
                    <IconButton onClick={() => setMenuOpen(!menuOpen)} color="inherit">
                        <MenuIcon />
                    </IconButton>
                )}
            </div>
            { isNarrowScreen && menuOpen && (
                <div className="flex flex-col items-center bg-gray-800 w-full absolute top-full left-0 space-y-4">
                    {renderNavLinks()}
                    <br />
                </div>
            )}
            
        </nav>
    );
};

export default Navbar;
