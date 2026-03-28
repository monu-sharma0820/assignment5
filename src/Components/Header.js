import React, { useEffect, useRef, useState } from 'react';
import '../Style/header.scss';
import logo from '../Images/header-logo.png';
import moviebazer from '../Images/moviebazer.png';

function Header({ setCategory, trendingRef }) {

    const handleClick = (type) => {
        setCategory(type);

        trendingRef.current.scrollIntoView({
            left:0,
            behavior: 'smooth',
        });
     
    };

    return (
        <div className='navbar'>
            <div className='sub-navbar'>

                <div className='leftside-container'>
                    <img src={logo} alt='logo' className='black-image' />
                    <img src={moviebazer} alt='moviebazer' />
                </div>

                <div className='rightside-container'>
                    <ul>
                        <li>
                            <a href="" className='nav-item' onClick={(e) => { e.preventDefault(); handleClick("popular") }}>
                                Popular
                            </a>
                        </li>
                        <li>
                            <a href="" className='nav-item' onClick={(e) => { e.preventDefault(); handleClick("top_rated") }}>
                                Top Rated
                            </a>
                        </li>
                        <li>
                            <a href="" className='nav-item' onClick={(e) => { e.preventDefault(); handleClick("upcoming") }}>
                                Upcoming
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;