"use client";

import { useState } from "react";

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(email, subject, message);
    }

    return (
        <form onSubmit={handleSubmit} className="text-center p-8">
            <h1 className="text-2xl font-extrabold">Let&apos;s Connect!</h1>
            <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 my-2"/>
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 my-2"/>
            <textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 my-2"></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
        </form>
    );
}

export default ContactForm;