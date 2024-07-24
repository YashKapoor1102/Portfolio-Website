"use client";

import React, { useEffect, useState } from 'react';
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 50)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <div className='fixed right-5 bottom-5'>
            {isVisible && (
                <div className='rounded-full bg-blue-500 hover:bg-blue-600'>
                <IconButton onClick={scrollToTop} color="inherit" className="hover:text-blue-300">
                    <ArrowUpwardIcon fontSize="large"/>
                </IconButton>
            </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;