import React from 'react';

const AboutMe = () => {
  const content = [
      "I am a software engineer who enjoys building original, user-friendly applications that solve real-world problems.",
    
      "I am skilled in full-stack development with technologies like React, Node.js, Python, " +
      "Java, C, and C++. I thrive on tackling new challenges and driving positive change. " +
      "If you'd like to explore some of the projects I have worked on, feel free to check out my GitHub.",
          
      "Outside of work, I enjoy golf, hiking, basketball, traveling, and kayaking."
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
