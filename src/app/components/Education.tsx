import React from 'react';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import Image from 'next/image';

const Education: React.FC = () => {
    return (
        <section id="Education" className="py-12 flex flex-col justify-center items-center bg-gray-50 text-black">

                <h1 className="text-4xl font-extrabold text-center mb-10">Education</h1>

                <div className="bg-white shadow-md text-center rounded-lg p-6 mx-5">
                    <Image 
                        src={'/images/CarletonLogo.jpg'} 
                        alt="Carleton University"
                        className="inline mb-4" 
                        width={256} 
                        height={192}
                    />
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

                    <Button 
                        variant="contained"
                        color="primary"
                        href="/files/List of Courses.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<BookIcon />}
                    >
                        View List of Courses
                    </Button>

                </div>

        </section>
    );
}

export default Education;
