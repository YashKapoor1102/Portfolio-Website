import React from 'react';

const Skills: React.FC = () => {
    const programmingLanguages = ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'Bash', 'Racket', 'SQL', 'PHP'];
    const frontendTechnologies = ['HTML/CSS', 'Angular', 'React', 'Bootstrap'];
    const backendTechnologies = ['Node.js', 'Express.js', 'Spring', 'MySQL'];
    const cloudPlatforms = ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Azure'];
    const devOpsTechnologies = ['Docker', 'CI/CD', 'Selenium', 'Elasticsearch', 'Logstash', 'Kibana'];
    const testingFrameworks = ['JUnit', 'Pytest', 'Jest', 'React Testing Library'];
    const tools = ['VSCode', 'Git', 'Jira', 'Confluence', 'MySQL Workbench', 'Postman', 'PowerShell', 'Webpack', 'IntelliJ', 'Eclipse', 'PyCharm','Linux', 'Makefile', 'XML'];
    
    return (
        <section id="Skills" className="py-8 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Programming Languages</h2>
                    <div className="flex flex-wrap justify-center">
                        {programmingLanguages.map((skill, index) => (
                            <span key={index} className="m-2 px-4 py-2 bg-blue-200 text-blue-800 rounded shadow">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Frontend Technologies</h2>
                    <div className="flex flex-wrap justify-center">
                        {frontendTechnologies.map((skill, index) => (
                            <span key={index} className="m-2 px-4 py-2 bg-green-200 text-green-800 rounded shadow">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Backend Technologies</h2>
                    <div className="flex flex-wrap justify-center">
                        {backendTechnologies.map((skill, index) => (
                            <span key={index} className="m-2 px-4 py-2 bg-yellow-200 text-yellow-800 rounded shadow">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Cloud Platforms</h2>
                    <div className="flex flex-wrap justify-center">
                        {cloudPlatforms.map((skill, index) => (
                            <span key={index} className="m-2 px-4 py-2 bg-indigo-200 text-indigo-800 rounded shadow">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-4">DevOps Technologies</h2>
                    <div className="flex flex-wrap justify-center">
                        {devOpsTechnologies.map((skill, index) => (
                            <span key={index} className="m-2 px-4 py-2 bg-red-200 text-red-800 rounded shadow">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Testing Frameworks</h2>
                    <div className="flex flex-wrap justify-center">
                        {testingFrameworks.map((skill, index) => (
                            <span key={index} className="m-2 px-4 py-2 bg-teal-200 text-teal-800 rounded shadow">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Tools</h2>
                    <div className="flex flex-wrap justify-center">
                        {tools.map((skill, index) => (
                            <span key={index} className="m-2 px-4 py-2 bg-purple-200 text-purple-800 rounded shadow">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;