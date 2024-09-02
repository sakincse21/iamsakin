import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = (props) => {
    const { visual, title, description, technology, link, key } = props.project;
    return (
        <div className='row my-4 mx-auto main'>
            <div className="first">
                <img src={visual} alt={key} />
            </div>
            <div className="third">
                <p className='fs-4'>{title}</p>
                <p className='fs-6'>{description}</p>
            </div>
            <div className="second">
                <p>{technology}</p>
                <p><a href={link} target='_blank' rel="noreferrer">Demo</a></p>
            </div>
        </div>
    );
};

export default ProjectInfo;