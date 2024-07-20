"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInWhenVisibleProps {
    children: React.ReactNode;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
        hidden: { opacity: 0, scale: 0.95}
    };

    return (
        <motion.div 
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible;