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
        <section id="WorkExperience" className="py-8 bg-gray-200">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-bold mb-6">Work Experience</h1>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg shadow-md p-6 max-w-4xl border border-blue-700">
                            <span className="text-sm font-normal">{exp.date}</span>
                            <h2 className="text-lg font-bold">{exp.title}</h2>
                            <p className="font-bold text-blue-700">{exp.company}</p>
                            <div className="flex flex-wrap gap-2 my-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{skill}</span>
                                ))}
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                {exp.description.map((desc, i) => (
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