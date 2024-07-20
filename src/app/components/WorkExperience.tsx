const WorkExperience: React.FC = () => {
    const experiences = [
        {
            date: 'January 2022 - December 2022',
            company: 'Barracuda Networks',
            title: 'Full Stack Software Engineer Intern',
            skills: ['TypeScript', 'JavaScript', 'React', 'Redux', 'Node.js', 
                    'Elasticsearch', 'Logstash', 'Kibana', 'Docker', 'Kubernetes', 
                    'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)',
                    'Jest', 'React Testing Library', 'Git', 'Jira', 'Confluence', 'Content Management System (CMS)',
                    'Unix/Linux Command Line'],
            description: [
                'Effectively collaborated with cross-functional teams in an Agile (SCRUM) environment to guarantee timely and efficient delivery of high-quality software products.',
                'Engaged in three-week sprints, involving daily stand-up meetings, utilization of Jira and Confluence, and delivering demo presentations.',
                'Finished a UDemy course on JavaScript, React, and Redux.',
                'Enhanced the user experience by designing a breadcrumb navigation system using React and Redux, integrating meaningful demo data using JavaScript, and managing content updates via a content management system, making it easier to navigate and understand the dashboard.',
                'Developed an optimized ticket management system for managed service providers using React, Node.js, and Elasticsearch, resulting in a 33% increase in operational efficiency and a 20% improvement in data consistency.',
                'Led the implementation of unit and integration tests across the codebase, achieving 100% test coverage using Jest and React Testing Library, which significantly enhanced reliability and usability.',
                'Engineered and deployed RESTful APIs within a microservices architecture using Docker and Kubernetes, improving system scalability and reducing deployment times by 30%.',
                'Automated ticket data processing and archiving workflows using cron jobs scheduled through GCP Cloud Scheduler, minimizing manual intervention and optimizing data management processes.',
                'Spearheaded the implementation of Ingest and Logstash pipelines, enhancing data collection and processing workflows.',
                'Gained hands-on experience with AWS S3 by managing, storing, and retrieving images in S3 buckets.'
            ]
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
            ]
        }
    ]
    return (
        <section id="WorkExperience" className="py-8 flex flex-col bg-gray-200">
            <h1 className="text-2xl font-extrabold text-center mb-8 text-black">Work Experience</h1>
            <div className="relative flex flex-col">
                <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
                {experiences.map((exp, index) => (
                    <div 
                        key={index}
                        className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row': 'flex-row-reverse'}`}
                    >
                    <div className="w-1/2 px-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold">{exp.company}</h2>
                            <h3 className="text-md text-gray-500 mb-4">{exp.title}</h3>
                            <div className="flex flex-wrap mb-4">
                                {exp.skills.map((skill, i) => (
                                        <span key={i} className="m-1 px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">{skill}</span>
                                ))}
                            </div>
                            {Array.isArray(exp.description) ? (
                                <ul className="list-disc list-inside mt-2">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-gray-700">{desc}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700 mt-2">{exp.description}</p>
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 px-4 text-center">
                            <span className="inline-block py-2 px-4 bg-white text-gray-800 rounded shadow-lg">{exp.date}</span>
                    </div>
                </div>
            ))}
            </div>          
        </section>
    );
}

export default WorkExperience;