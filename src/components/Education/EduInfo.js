import React from 'react';
import './EduInfo.css';
import course from '../../assets/images/course.png';
import cert from '../../assets/images/cert.png';
import book from '../../assets/images/book.png';
import college from '../../assets/images/college.png';
import skill from '../../assets/images/skill.png';
import time from '../../assets/images/time.png';

const EduInfo = (props) => {
    const eachInfo = props.each;

    return (
        <div className='col-lg-5 col-10 pt-2 pt-lg-2 outer-edu-info d-flex flex-column justify-content-center my-2 align-items-center'>

            <div className="py-2 d-flex flex-column align-items-start justify-content-center edu-info">
                <p>
                    <img src={course} alt="" /> <h6>{eachInfo.course}</h6>
                </p>
                <p>
                    <img src={book} alt="" /> <h4>{eachInfo.major}</h4>
                </p>
                <p>
                    <img src={college} alt="" /> <h6>{eachInfo.institute}</h6>
                </p>
                <p>
                    <img src={time} alt="" /> <h6>{eachInfo.timeline}</h6>
                </p>
                <p>
                    <img src={skill} alt="" /> <h6>{eachInfo.skills}</h6>
                </p>

            </div>

            <div className="inner my-3 pt-1">
                <p>
                    <img src={cert} alt="" /> <h6>{eachInfo.cgpa}</h6>
                </p>
            </div>
        </div>
    );
};

export default EduInfo;