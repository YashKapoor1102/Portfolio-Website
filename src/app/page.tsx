import React from 'react';
import Navbar from '../app/components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from '../app/components/AboutMe';
import WorkExperience from '../app/components/WorkExperience';
import Skills from '../app/components/Skills';
import Projects from '../app/components/Projects';
import Education from '../app/components/Education';
import ContactForm from '../app/components/ContactForm';
import Footer from '../app/components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Introduction />
            <AboutMe />
            <WorkExperience />
            <Skills />
            <Projects />
            <Education />
            <ContactForm />
            <Footer />
        </div>
    );
}