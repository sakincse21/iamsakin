import React from 'react';
import ProjectInfo from './ProjectInfo';
import arena from '../../assets/images/ss/arena.png';
import mydic from '../../assets/images/ss/mydic.jpeg';
import redonion from '../../assets/images/ss/redonion.gif';
import weather from '../../assets/images/ss/weather.jpeg';

const Projects = () => {
    const projectSummary = [
        {
            key: 0,
            visual: redonion,
            title: 'Red Onion',
            description: 'A food ordering platform frontend',
            technology: 'HTML, CSS, ES7, ReactJS, Git, Firebase',
            link: 'http://red-onion-bangla.netlify.app'
        },
        {
            key: 1,
            visual: mydic,
            title: 'My Dictionary',
            description: 'A simple English dictionary application',
            technology: 'HTML, CSS, ES7, ReactJS, Git',
            link: 'http://my-dic.netlify.app'
        },
        {
            key: 2,
            visual: arena,
            title: `Saleheen's Areana`,
            description: 'Portfolio website with retro theme',
            technology: 'HTML, CSS, ES7, ReactJS, Git',
            link: 'http://saleheensarena.netlify.app'
        },
        {
            key: 3,
            visual: weather,
            title: `JB Weather Station`,
            description: 'Current weather searching site',
            technology: 'HTML, CSS, ES7, ReactJS, Git',
            link: 'https://jb-weather-station.netlify.app'
        }
    ];
    return (
        <div className='container pt-5 d-flex flex-wrap'>
            {
                projectSummary.map(project => <ProjectInfo project={project} key={project.key}></ProjectInfo>)
            }
        </div>
    );
};

export default Projects;