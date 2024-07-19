import React from 'react';

const Introduction: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <img
                src=""
                alt="Yash Kapoor"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="mt-4 text-3xl font-bold">Hi there! I&apos;m Yash Kapoor</h1>
            <p className="mt-2 text-center max-w-xl">
                I&apos;m a recent software engineering graduate from Carleton University in Ottawa, Ontario, Canada.
            </p>

            <div className="mt-6 flex space-x-4">
                <a 
                    href=""
                    download
                    className="px-4 py-2 bg-white text-blue-500 rounded shadow hover:bg-gray-100"
                >
                    Download Resume
                </a>

                <a 
                    href="https://www.linkedin.com/in/yashkapoor1102/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-4 py-2 bg-white text-blue-500 rounded shadow hover:bg-gray-100'
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/yashkapoor1102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-blue-500 rounded shadow hover:bg-gray-100"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
};

export default Introduction;