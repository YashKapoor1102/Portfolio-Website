"use client";

import { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // ensuring no fields are empty 
        if (!email.trim() || !subject.trim() || !message.trim()) {
            setError('Please fill in all the fields.');
            setLoading(false);
            return;
        }

        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        formData.append('_captcha', 'false');

        try {
            const response = await fetch('https://formsubmit.co/yashkapooruni@gmail.com', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setSubmitted(true);
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                console.error('Failed to send message');
                setError('Failed to send the message. Please try again.');
            }
        } catch(error) {
            console.error('Error: ', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div id="ContactForm" className="flex justify-center items-center bg-gray-200">
            <form action="https://formsubmit.co/yashkapooruni@gmail.com" 
                method="POST"
                onSubmit={handleSubmit} 
                className=" p-6 bg-white rounded-lg shadow-xl"
            >
                <h1 className="text-2xl font-extrabold text-center">Get In Touch!</h1>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="email" name="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} 
                    className="w-full p-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="text" name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} 
                    className="w-full p-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea name="message" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} 
                    className="w-full p-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    endIcon={<SendIcon />}
                    className="mb-4"
                >
                    Send Message
                </Button>
                {loading && (
                    <div className="flex justify-center p-4 items-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}
                {error && <div className="text-red-500 font-bold text-center mt-2 p-4">{error}</div>}
                {submitted && !loading &&  (
                <div className="text-center text-blue-500">
                    Thank you for sending your message. I have received it and will get back to you shortly!
                </div>
                )}
            </form>
        </div>
    );
}

export default ContactForm;