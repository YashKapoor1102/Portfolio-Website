import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full flex justify-around p-4 bg-gray-800 text-white z-50">
            <Link href="#AboutMe" legacyBehavior>
                <a className="hover:text-gray-300">About Me</a>
            </Link>
            <Link href="#WorkExperience" legacyBehavior>
                <a className="hover:text-gray-300">Work Experience</a>
            </Link>
            <Link href="#Skills" legacyBehavior>
                <a className="hover:text-gray-300">Skills</a>
            </Link>
            <Link href="#Projects" legacyBehavior>
                <a className="hover:text-gray-300">Projects</a>
            </Link>
            <Link href="#Education" legacyBehavior>
                <a className="hover:text-gray-300">Education</a>
            </Link>
            <Link href="#ContactForm" legacyBehavior>
                <a className="hover:text-gray-300">Contact</a>
            </Link>
        </nav>
    );
};

export default Navbar;
