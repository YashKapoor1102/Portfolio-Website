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
import FadeInWhenVisible from './components/FadeInWhenVisible';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
    return (
        <div>
            <Analytics />
            <Navbar />
            <Introduction />

            <FadeInWhenVisible>
                <AboutMe />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <WorkExperience />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Skills />
            </FadeInWhenVisible>
  
            <FadeInWhenVisible>
                <Projects />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Education />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <ContactForm />
            </FadeInWhenVisible>

            <Footer />
            <ScrollToTopButton />

        </div>
    );
}