import React from 'react';
import '../Style/banner.scss';
import gardian from '../Images/gardian-galaxy.png';
import spiderman from '../Images/spiderman.png';
import icons from '../Images/video-icon.png'

function Banner() {
    return (
        <div className='banner-section'>
            <div className='first-section'>
                <h2>FIND MOVIE</h2>
                <h1 className='gradient-text'>TV SHOWS AND MORE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button>
                    <div className='watch-btn'>
                        <div>
                            <img src={icons} width="15" height="15" alt="icon"></img>
                        </div>
                        <span> Watch Tutorial</span>
                    </div>
                </button>
            </div>
            <div className='second-section'>
                <img src={spiderman} className='img-fluid' />
                <img src={icons} className='img-fluids' width="50" height="50" />
                <img src={gardian}  className='image-section'/>
            </div>
        </div>
    )
}

export default Banner;