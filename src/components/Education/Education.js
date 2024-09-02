import React from 'react';
import EduInfo from './EduInfo';
import './Education.css';


const Education = () => {
    const eduSummary = [
        {
            course: 'B.Sc. in Engineering',
            major: 'Computer Science & Engineering',
            institute: 'Khulna University of Engineering & Technology',
            timeline: '2022 - Present',
            cgpa: '3.52/4.00',
            skills: 'C, C++, OOP, DSA, Digital Logic Design & so on'
        },
        {
            course: 'Higher Secondary Certificate',
            major: 'Science',
            institute: 'Govt. Rajendra College',
            timeline: '2019 - 2021',
            cgpa: '5.00/5.00',
            skills: 'HTML & C'
        },
        {
            course: 'Secondary School Certificate',
            major: 'Science',
            institute: 'Faridpur Zilla School',
            timeline: '2017 - 2019',
            cgpa: '5.00/5.00',
            skills: 'HTML & CSS'
        }
    ];
    return (
        <div className='d-flex pt-5 row justify-content-evenly mx-auto align-items-center education' >
            {
                eduSummary.map(each => <EduInfo each={each} /> )
            }
        </div>
    );
};

export default Education;