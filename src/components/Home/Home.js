import React, { useState } from 'react';
import './Home.css';
import myPic from '../../assets/images/myPic.png';
import locationIcon from '../../assets/images/location.png';
import fb from '../../assets/images/socials/fb.png';
import insta from '../../assets/images/socials/insta.png';
import cf from '../../assets/images/socials/cf.png';
import linkedin from '../../assets/images/socials/in.png';
import leetcode from '../../assets/images/socials/leetcode.png';
import github from '../../assets/images/socials/github.png';

const Home = () => {
    const info = 'passionate, self taught & experienced';
    const [infotxt, setInfotxt] = useState(info.slice(0, 10));
    const handleHover = () => {
        setInfotxt(info);
    }
    return (
        <div className='row d-flex justify-content-center align-items-end home'>
            <div className="d-flex col-lg-6 align-items-lg-center col-10 justify-content-center align-items-center flex-column position-relative mx-auto imgArea">
                <img className='' src={myPic} alt="saleheen" />
                <div className="locationArea d-flex flex-row position-absolute bottom-0 bg-gray align-items-center px-5 py-2 justify-content-evenly">
                    <img className='px-2' src={locationIcon} alt="loc" width={'48px'} id='image' />
                    <h5 className='mt-3'>Faridpur, Bangladesh</h5>
                </div>
            </div>
            <div className=" d-flex flex-column col-lg-6 align-items-lg-start justify-content-lg-center col-10 justify-content-center align-items-center mt-5 mypr-5 mx-auto px-3 px-lg-0" >
                <h4>Hi, I'm</h4>
                <h1 className='py-2 text-center text-lg-start w-100'>Saleheen Uddin Sakin</h1>
                <h4 className=' text-center text-lg-start w-100' onMouseOver={handleHover} >A {infotxt} software engineer.</h4>
                <div className='my-3 skills d-flex d-lg-block flex-column align-items-center align-items-lg-start'>
                    <p><span className='text-bold'>Frontend: </span>ReactJS, HTML, CSS</p>
                    <p><span className='text-bold'>Backend: </span> NodeJS</p>
                    <p><span className='text-bold'>Database: </span>MongoDB</p>
                    <p className='text-center text-lg-start w-100 text-wrap'><span className='text-bold text-nowrap'>Programming Languages: </span>JavaScript, C, C++, Python</p>
                    <p><button className='resume mt-3 nav-link'>Resume</button></p>
                </div>
                <div className='my-3 socials d-flex flex-row align-items-centersocials'>
                    <a href="http://github.com/sakincse21" target='_blank' rel='noreferrer'><img src={github} alt="codeforces" /></a>
                    <a href="http://codeforces.com/profile/piro-_-panda" target='_blank' rel='noreferrer'><img src={cf} alt="codeforces" /></a>
                    <a href="https://bd.linkedin.com/in/saleheen-sakin" target='_blank' rel='noreferrer'><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://leetcode.com/u/saleheen7" target='_blank' rel='noreferrer'><img src={leetcode} alt="linkedin" /></a>
                    <a href="http://facebook.com/saleheen.sakin" target='_blank' rel='noreferrer'><img src={fb} alt="facebook" /></a>
                    <a href="http://instagram.com/saleheen.sakin" target='_blank' rel='noreferrer'><img src={insta} alt="instagram" /></a>
                </div>
            </div>
        </div>
    );
};

export default Home;