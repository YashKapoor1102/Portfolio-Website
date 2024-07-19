import React from 'react';

const AboutMe: React.FC = () => {
    const paragraphs = [
        <>
            I am a recent software engineering graduate from Carleton University<br />
            with a passion for creating innovative and user-friendly applications.
        </>,
        <>
            I am skilled in full-stack development with technologies like React, Node.js, Python, Java, C, and C++.<br />
            I thrive on tackling new challenges and driving positive change.<br />
            If you&apos;d like to explore some of the projects I have worked on, feel free to check out my GitHub.
        </>,
        <>
            I am committed to continuous learning and eager to expand my skillset.<br />
            I am actively seeking a full-time position as a software engineer<br />
            where I can leverage my skills to contribute to exciting projects and innovative solutions.
        </>,
        <>
            Outside of work, I enjoy golf, basketball, traveling, swimming, and kayaking.
        </>
    ];
    
    
    return (
        <section id="AboutMe" className="py-8 flex flex-col items-center text-center bg-gray-100">
            <h1 className="text-2xl font-extrabold mb-4 underline">About Me</h1>
            <div className="max-w-1xl leading-relaxed">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}

export default AboutMe;
