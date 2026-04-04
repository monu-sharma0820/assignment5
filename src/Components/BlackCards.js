import React, { useRef, useState } from 'react';
import '../Style/common.scss';
import Header from './Header';
import Banner from './Banner';
import Trending from './Trending';
function BlackCards({ theme, toggleTheme }) {
  const [category, setCategory] = useState("popular");
  const trendingRef = useRef(null);
  return (  
    <div className={`left-container ${theme}`}>
       <button onClick={toggleTheme} className='btn'>Toggle Theme</button>
      <Header setCategory={setCategory} trendingRef={trendingRef}   />
      <Banner />
      <div ref={trendingRef}>
     <Trending category={category} />
      </div>
    </div>
  )
}

export default BlackCards;