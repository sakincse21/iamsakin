import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const linkStyle = {
        textDecoration: 'none'
    }
    return (
        <div className='pt-3 px-3 myNav w-100 d-flex flex-lg-row flex-column align-items-center justify-content-lg-between  mb-lg-0 header'>
            <div >
                <Link to={'/'} style={linkStyle}><h3 className='mx-md-3 mx-sm-2 text-black webName'>Saleheen's Arena</h3></Link>
            </div>
            <div>
                <nav class="navbar">
                    <ul class="navbar-nav d-flex flex-row">
                        <li class="nav-item mx-3">
                            <Link to={'/home'} style={linkStyle}> <span className='nav-link'>Home</span></Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link to={'/education'} style={linkStyle}> <span className='nav-link'>Education</span></Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link to={'/projects'} style={linkStyle}> <span className='nav-link'>Projects</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;