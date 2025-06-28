import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import '../styles/custom.css';

const Introduction: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center animated-gradient py-16 text-white h-screen">
            <Image
                src="/images/My Picture.png"
                alt="Yash Kapoor"
                className="rounded-full border-4 border-white shadow-lg"
                width={208} 
                height={208}
            />
            <h1 className="mt-4 text-3xl font-bold">Hi there! I&apos;m Yash Kapoor</h1>
            <p className="mt-2 text-center max-w-xl mb-4">
                Software Engineer
            </p>

            <div className="max-w-screen-lg mx-auto flex justify-center space-x-4 mb-4">
                <IconButton href="https://linkedin.com/in/yashkapoor1102" target="_blank" rel="noopener noreferrer" color="inherit" className="hover:text-blue-300">
                    <LinkedInIcon fontSize="large" />
                </IconButton>

                <IconButton href="mailto:yashkapooruni@gmail.com" color="inherit" className="hover:text-blue-300">
                    <EmailIcon fontSize="large" />
                </IconButton>

                <IconButton href="https://github.com/yashkapoor1102" target="_blank" rel="noopener noreferrer" color="inherit" className="hover:text-blue-300">
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </div>
            <a 
                    href="/files/Resume.pdf"
                    download
                    className="px-4 py-2 bg-white text-blue-500 rounded shadow hover:bg-gray-100"
            >
                Download Resume
            </a>
        </section>
    );
};

export default Introduction;