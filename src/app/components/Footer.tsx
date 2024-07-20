import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
    return (
        <div className="bg-blue-800 text-white text-center p-4">
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
            <p className="mb-4">Ready to chat about your next big idea? Drop me a line!</p>
            <p className="text-xs font-medium mt-2">Copyright &copy; 2024 Yash Kapoor</p>
        </div>
    );
}

export default Footer;