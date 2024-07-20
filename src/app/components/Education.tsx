import React from 'react';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';

const Education: React.FC = () => {
    return (
        <section id="Education" className="py-12 flex flex-col justify-center items-center bg-gray-50">

                <h1 className="text-4xl font-extrabold text-center mb-10">Education</h1>

                <div className="bg-white shadow-md text-center rounded-lg p-6">
                    <img src={'/images/CarletonLogo.jpg'} alt="Carleton University" className="h-48 inline mb-4"/>
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
                        href="/grades/Record of Grades.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<SchoolIcon />}
                    >
                        View Record of Grades
                    </Button>

                </div>

        </section>
    );
}

export default Education;
