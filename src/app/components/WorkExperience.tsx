import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Card, CardContent, Typography, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';


interface Experience {
  date: string;
  company: string;
  title: string;
  skills: string[];
  description: string[];
}


interface ExperienceItemProps {
  exp: Experience;
}


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
                <Typography variant="h4" component="h1" className="font-bold text-center mb-6">
                    Work Experience
                </Typography>
                <Timeline position="right">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                {index < experiences.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>

                            <Card raised className="flex-grow">
                                <CardContent>
                                    <Typography variant="h6" className="font-bold">
                                        {exp.title} <span className="font-normal text-sm">{exp.date}</span>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className="text-secondary">
                                        {exp.company}
                                    </Typography>
                                    <div className="my-2.5">
                                        {exp.skills.map((skill, i) => (
                                            <Chip key={i} label={skill} size="small" className="m-0.5" />
                                        ))}
                                    </div>
                                    <ul className="list-disc ml-4">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="mt-1.5">{desc}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};

export default WorkExperience;