"use client";

import React, { useState } from 'react';
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const WorkExperience: React.FC = () => {

    const [openTab, setOpenTab] = useState<string[]>([]);

    const toggleTab = (tab: string) => {
        setOpenTab((prevTabs) => 
            prevTabs.includes(tab) ? prevTabs.filter((t) => t !== tab) : [...prevTabs, tab]
        );
    };

    const experiences = [
        {
            date: 'January 2022 - December 2022',
            company: 'Barracuda Networks',
            title: 'Full Stack Software Engineer Intern',
            skills: ['TypeScript', 'JavaScript', 'React', 'Redux', 'Node.js', 
                    'Elasticsearch', 'Logstash', 'Kibana', 'Docker', 'Kubernetes', 
                    'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)',
                    'Jest', 'React Testing Library', 'Git', 'Jira', 'Confluence', 
                    'Content Management System (CMS)', 'Unix/Linux Command Line',
                    'Cascading Style Sheets (CSS)'],
            description: null, 
            categories: {
                'Key Accomplishments': [
                    'Developed an optimized ticket management system for managed service providers using React, Node.js, and Elasticsearch, resulting in a 33% increase in operational efficiency and a 20% improvement in data consistency.',
                    "Enhanced the customer security dashboard by integrating SentinelOne's API to update endpoint security policy names. Tested with Postman and implemented secure backend calls using JavaScript libraries like Axios.",
                    'Designed and implemented a new setup screen for Sophos Central Integration using React, enabling users to configure and validate API credentials directly with the Sophos Central API. Integrated secure backend storage in Elasticsearch, improving usability, automating setup, and streamlining the integration process.',
                    'Engineered and deployed RESTful APIs within a microservices architecture using Docker and Kubernetes, improving system scalability and reducing deployment times by 30%.',
                ],

                'Frontend Development': [
                    'Addressed timeout issues by implementing dynamic search functionality for ConnectWise company names using React hooks and advanced JavaScript concepts, improving usability and performance.',
                    'Implemented and tested responsive layouts using CSS media queries, ensuring the dashboard delivered a seamless user experience across devices, improving accessibility for users on mobile and desktop platforms.',
                    'Designed and developed a breadcrumb navigation system using React, Redux, and CSS, improving user experience by making navigation intuitive and visually consistent across pages.',
                ],

                'Backend Development': [
                    'Spearheaded the implementation of Ingest and Logstash pipelines, enhancing data collection and processing workflows.',
                    'Gained hands-on experience with AWS S3 by managing, storing, and retrieving images in S3 buckets.',
                    'Automated ticket data processing and archiving workflows using cron jobs scheduled through GCP Cloud Scheduler, minimizing manual intervention and optimizing data management processes.',
                ],

                'Full-Stack Development': [
                    'Redesigned the status configuration screen to sync Barracuda SKOUT XDR and ConnectWise ticket statuses. Developed the frontend user interface using React and backend logic with HTTP request libraries to automate status updates via the ConnectWise API.',
                    "Automated the generation and integration of anonymized demo data by fetching key datasets from external APIs and querying Elasticsearch, using JavaScript to dynamically update the dashboard. This enhanced the dashboard's functionality and interactivity, making it more user-friendly and effective for sales demonstrations."
                ],

                'Teamwork & Agile Practices': [
                    'Engaged in three-week sprints, involving daily stand-up meetings, utilization of Jira and Confluence, and delivering demo presentations.',
                    'Effectively collaborated with cross-functional teams in an Agile (SCRUM) environment to guarantee timely and efficient delivery of high-quality software products.',
                ],

                'Testing & Quality Assurance': [
                    'Led the implementation of unit, integration, and regression tests across the codebase, achieving 100% test coverage using Jest and React Testing Library. Integrated these tests into the CI/CD pipeline, ensuring continuous validation and significantly enhancing reliability and usability.'
                ],

                'Content Management & Skill Development': [
                    'Managed and updated integration descriptions, images, and logos on the integrations page of the Customer Security Dashboard using a Content Management System (CMS), ensuring accurate and visually consistent content representation.',
                    'Completed a UDemy course on TypeScript, JavaScript, React, Redux, and Node.js to enhance development skills.',
                ]
            }
        },
        {
            date: 'September 2017 - August 2019',
            company: 'Canadian Tire Corporation, Limited',
            title: 'Customer Representative',
            skills: ['Communication', 'Collaboration', 'Problem-solving', 'Conflict Resolution', 'Point-of-Sale Systems'],
            description: [
                'Developed strong communication skills through frequent customer engagement.',
                'Successfully engaged with a diverse range of customers to address inquiries, provide assistance, and ensure a positive shopping experience.',
                'Leveraged technology to streamline point-of-sale processes, achieving high customer satisfaction and accurate record-keeping, even during peak sales periods.',
                'Analyzed and developed business knowledge about products and policies of the organization and collaborated closely with colleagues to effectively tackle fraud.'
            ],
            categories: null
        }
    ]

    return (
        <section id="WorkExperience" className="py-8 bg-gray-200">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-bold mb-6">Work Experience</h1>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg shadow-md p-6 max-w-4xl border border-blue-700">
                            <span className="text-sm font-normal">{exp.date}</span>
                            <h2 className="text-lg font-bold">{exp.title}</h2>
                            <p className="font-bold text-blue-800">{exp.company}</p>
                            <div className="flex flex-wrap gap-2 my-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{skill}</span>
                                ))}
                            </div>
                            {exp.categories && (
                                <div className="mt-6">
                                    {Object.keys(exp.categories).map((category, i) => (
                                        <div
                                            key={i}
                                            className={`border ${openTab.includes(`${exp.company}-${category}`) ? "border-blue-500" : "border-gray-300"} rounded-lg overflow-hidden mb-4`}
                                        >
                                            <button 
                                                onClick={() => toggleTab(`${exp.company}-${category}`)}
                                                className="text-left w-full bg-blue-200 hover:bg-blue-300 rounded-lg py-2 px-4 font-semibold text-blue-700 border border-blue-500"
                                            >
                                                {openTab.includes(`${exp.company}-${category}`) ? (
                                                    <ExpandLess fontSize="small" /> 
                                                ) : (
                                                    <ExpandMore fontSize="small" />
                                                )}
                                                <span>{category}</span>
                                            </button>
                                            {openTab.includes(`${exp.company}-${category}`) && (
                                                <div className="p-4 bg-blue-100">
                                                    <ul className="list-disc pl-6 mt-2">
                                                        {exp.categories[category as keyof typeof exp.categories].map((item, j) => (
                                                            <li key={j} className='text-gray-800 mb-4'>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div> 
                            )}
                            <ul className="list-disc pl-5 space-y-1">
                                {exp?.description?.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;