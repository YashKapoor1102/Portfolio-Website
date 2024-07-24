import React from 'react';

const AboutMe = () => {
    const content = [
        "I am a recent software engineering graduate from Carleton University with a passion " +
        "for creating innovative and user-friendly applications.",
      
        "I am skilled in full-stack development with technologies like React, Node.js, Python, " +
        "Java, C, and C++. I thrive on tackling new challenges and driving positive change. " +
        "If you'd like to explore some of the projects I have worked on, feel free to check out my GitHub.",
      
        "I am committed to continuous learning and eager to expand my skillset. I am actively " +
        "seeking a full-time position as a software engineer where I can leverage my skills to " +
        "contribute to exciting projects and innovative solutions.",
      
        "Outside of work, I enjoy golf, basketball, traveling, swimming, and kayaking."
    ];
      

  return (
    <section id="AboutMe" className="py-8 flex flex-col items-center text-center bg-gray-50">
      <h1 className="text-2xl font-extrabold mb-4 underline text-black">About Me</h1>
      <div className="max-w-xl w-full leading-relaxed text-left px-4">
        {content.map((text, index) => (
          <p key={index} className="mb-4 text-black">{text}</p>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
