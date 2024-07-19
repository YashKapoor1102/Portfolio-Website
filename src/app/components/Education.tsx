import React from 'react';

const Education: React.FC = () => {
    return (
        <section id="Education" className="py-12 flex flex-col justify-center items-center bg-gray-50">

                <h1 className="text-4xl font-extrabold text-center mb-10">Education</h1>

                <div className="bg-white shadow-md text-center rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-1">Carleton University</h2>
                    <p className="text-lg text-gray-700 mb-4">Bachelor of Engineering in Software Engineering with Co-op</p>
                    <div className="mb-4">
                        <p className="text-md text-gray-600 italic">2019 - 2024</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
                        <h3 className="text-xl font-semibold mb-6">GPA: 3.59/4 (A-)</h3>
                        <h3 className="text-xl font-semibold mb-2">Awards</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Dean&apos;s List</li>
                            <li>Entrance Scholarship of $3000</li>
                        </ul>
                        
                    </div>

                    <a 
                        href="/grades/Record of Grades"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700'
                    >
                        View Record of Grades
                    </a>

                </div>

        </section>
    );
}

export default Education;
