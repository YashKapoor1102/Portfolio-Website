"use client";

import React, { useState, useRef, useEffect } from 'react';
import Modal from "./Modal";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Image from 'next/image';

const projects = [
    {
        title: 'Instant Messaging Platform',
        technologies: ['React', 'Node.js', 'Express.js', 'Jest/React Testing Library', 'SQL', 'MySQL'],
        description: [
            'Built a dynamic instant messaging platform with a rich chat interface using React and Node.js.',
            'Incorporated multimedia file support and scheduling functionalities to enhance user interaction.',
            'Deployed the system on Heroku and Netlify to ensure high availability and performance.',
        ],
        demo: '/demos/instant-messaging-website.mp4',
        type: 'video',
        url: 'YashKapoor1102/MessagingWebsite'
    },
    {
        title: 'Secure Access Control System',
        technologies: ['Python', 'bcrypt', 'JSON', 'RBAC', 'unittest framework'],
        description: [
            'Developed a command-line tool for user registration and authentication with Python and bcrypt.',
            'Implemented Role-Based Access Control (RBAC) to manage permissions dynamically.',
            'Added a password strength checker using regular expressions to enhance security.',
        ],
        demo: '/demos/access-control-system.mp4',
        type: 'video',
        url: 'YashKapoor1102/Access-Control-System-for-Users'
    },
    {
        title: 'Online Bookstore',
        technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Flyway', 'Maven', 'JUnit'],
        description: [
            'Created a Spring Boot web app for managing bookstore operations, including user registration, browsing, and checkout.',
            'Used Flyway for seamless database migrations, ensuring data integrity.',
            'Conducted extensive testing with JUnit and deployed the app on Azure for broad accessibility.',
        ],
        demo: '/demos/online-bookstore.mp4',
        type: 'video',
        url: 'YashKapoor1102/AmazinOnlineBookstore'
    },
    {
        title: 'Interactive Elevator Simulation System',
        technologies: ['Java', 'Java Swing', 'UDP', 'JUnit', 'State Design Pattern', 'Multithreading'],
        description: [
            'Developed a GUI for a real-time elevator simulation system using Java and Swing.',
            'Utilized UDP for efficient component communication and multithreading for management.',
            'Applied the state design pattern to ensure smooth and reliable system operations.',
        ],
        demo: '/demos/elevator-simulation.mp4',
        type: 'video',
        url: 'YashKapoor1102/Interactive-Elevator-Simulation-System'
    },
    {
        title: 'Java-Based Monopoly Game Engine',
        technologies: ['Java', 'XML', 'Java Swing', 'Model-View-Controller Pattern', 'JUnit'],
        description: [
            'Created an interactive Monopoly game interface using Java Swing, with XML for dynamic gameboard customization.',
            'Ensured code robustness with unit and integration tests using JUnit, achieving 100% test coverage.',
        ],
        demo: '/demos/monopoly-game.mp4',
        type: 'video',
        url: 'YashKapoor1102/Monopoly-Game-Engine'
    },
    {
        title: 'Scalable E-Commerce Application',
        technologies: ['Java', 'Java Swing', 'Maven', 'JUnit', 'Selenium'],
        description: [
            'Built a Java Swing GUI for an e-commerce platform, featuring cart management, checkout, and inventory tracking.',
            'Enhanced reliability with comprehensive testing using JUnit and Selenium, alongside robust exception handling.',
        ],
        demo: '/demos/e-commerce-application.mp4',
        type: 'video',
        url: 'YashKapoor1102/E-Commerce-Application'
    },
    {
        title: 'Simplified Twitter',
        technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MySQL'],
        description: [
            'Engineered a simplified version of Twitter with user registration, login, profile management, and posting.',
            'Used JavaScript and AJAX for dynamic feedback and interaction management.',
            'Implemented robust security measures, including hashed passwords and session management, to protect user data.',
        ],
        demo: '/demos/simplified-twitter.mp4',
        type: 'video',
        url: 'YashKapoor1102/Simplified-Twitter'
    },
    {
        title: 'Signal Processing Pipeline',
        technologies: ['C++', 'Catch2'],
        description: [
            'Developed a signal processing pipeline in C++, using advanced techniques like templates and modern C++ concepts.',
            'Performed comprehensive testing with Catch2 to validate pipeline functionality and reliability.',
        ],
        demo: '/demos/signal-processing-pipeline.png',
        type: 'image',
        url: 'YashKapoor1102/Simplified-Signal-Processing-Pipeline'
    },
    {
        title: 'Inter-process Communication Calculator',
        technologies: ['C', 'Makefile', 'Linux'],
        description: [
            'Built a client-server calculator system in C, managing inter-process communication using message queues.',
            'Demonstrated proficiency in managing concurrent processes and enhancing system interaction on a Linux platform.',
        ],
        demo: '/demos/ipc-calculator.mp4',
        type: 'video',
        url: 'YashKapoor1102/Interprocess-Communication-Calculator'
    },
    {
        title: 'Embedded State Monitor',
        technologies: ['C', 'Python', 'Keil uVision', 'Pyserial', 'Threading'],
        description: [
            'Created an application to monitor and control LED states on an MSP432 microcontroller via a serial port.',
            'Developed a PC interface in Python to ensure seamless communication and state management.',
        ],
        demo: '/demos/embedded-state-monitor.mp4',
        type: 'video',
        url: 'YashKapoor1102/Embedded-State-Monitor'

    },
    {
        title: 'Lexicographic Sort Concurrency',
        technologies: ['C', 'Makefile', 'Linux'],
        description: [
            'Designed a concurrent C program to sort letters lexicographically using multiple processes.',
            'Demonstrated advanced use of semaphores, shared memory, and debug modes for process monitoring.',
        ],
        demo: '/demos/lexicographic-sort.mp4',
        type: 'video',
        url: 'YashKapoor1102/Lexicographic-Sort-Concurrency'
    },
    {
        title: 'Concurrent Matrix Computations',
        technologies: ['C', 'Makefile', 'Linux'],
        description: [
            'Developed a concurrent program in C to calculate the determinant of a matrix using multiple processes.',
            'Showcased advanced concurrency management and inter-process communication on a Linux platform.',
        ],
        demo: '/demos/matrix-computations.mp4',
        type: 'video',
        url: 'YashKapoor1102/Concurrent-Matrix-Computations'
    },
    {
        title: 'Creation of Image Filters',
        technologies: ['Python', 'Pytest'],
        description: [
            'Led a team to develop custom image filters in Python, focusing on functional calling and exception handling.',
            'Conducted iterative testing with Pytest to ensure filter robustness and efficiency.',
        ],
        demo: '/demos/image-filters.mp4',
        type: 'video',
        url: 'YashKapoor1102/Image-Filter'
    }
];

interface VideoRefs {
    [key: string]: HTMLVideoElement | null;
}

const Projects: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [currentModalVideo, setCurrentModalVideo] = useState<string>('');
    const [currentType, setCurrentType] = useState<string>('');
    const videoRefs = useRef<VideoRefs>({});   // Storing a reference to the video element

    const openModal = (videoSrc: string, type: string) => {
        setCurrentModalVideo(videoSrc);
        setModalOpen(true);
        setCurrentType(type);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        Object.entries(videoRefs.current).forEach(([key, ref]) => {
            if (key.includes('elevator-simulation.mp4')) {
                const video = ref;
                if (video) {
                    // begin video at 80 seconds (1 minute and 20 seconds)
                    video.currentTime = 80;   
                    video.play();
    
                    const interval = setInterval(() => {
                        if (video.currentTime >= 322) {
                            // end video at 322 seconds (5 minutes and 22 seconds)
                            video.currentTime = 80;
                        }
                    }, 1000);
                    return () => clearInterval(interval);
                }
            }
        });

    }, []);

    return (
        <section id="Projects" className="py-12 bg-gray-200">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-center mb-10">My Projects</h1>
                <div className="grid gap-12 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex-grow">
                                <div className="relative h-96 cursor-pointer" onClick={() => openModal(project.demo, project.type)}>
                                    {project.type === 'image' ? (
                                        <Image 
                                            className="absolute inset-0 w-full h-full object-contain"
                                            src={project.demo} 
                                            alt="Image" 
                                            width={800}
                                            height={450}
                                        />
                                    ) : (
                                        <video 
                                            ref={demoElement => { videoRefs.current[project.demo] = demoElement }}
                                            className="absolute inset-0 w-full h-full object-contain" 
                                            loop autoPlay muted
                                        >
                                            <source src={project.demo} type="video/mp4" />
                                            Your browser doesn&apos;t support the video tag.
                                        </video>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                                    <div className="flex flex-wrap mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="m-1 px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">{tech}</span>
                                        ))}
                                    </div>
                                    <ul className="list-disc list-inside mb-4">
                                        {project.description.map((desc, i) => (
                                            <li key={i} className="text-gray-700">{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<GitHubIcon />}
                                href={`https://github.com/${project.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="max-w-xs"
                            >
                                View on GitHub
                            </Button>

                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} videoSrc={currentModalVideo} type={currentType} />
        </section>
    );
}

export default Projects;
