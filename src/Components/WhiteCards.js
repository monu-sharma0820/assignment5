import React, {useRef, useState } from 'react';
import Header from './Header'
import '../Style/common.scss';
import '../Style/blackcard.scss';
import Banner from './Banner';
import Trending from './Trending';
function WhiteCards({ theme, toggleTheme }) {
  const [category, setCategory] = useState("popular");
  const trendingRef = useRef(null);

  return (
    <div className={`right-container whitecard ${theme}`}> 
       <button onClick={toggleTheme} className='btn'>Toggle Theme</button>
      <Header setCategory={setCategory} trendingRef={trendingRef}/>
      <Banner />
      <div ref={trendingRef}>
        <Trending category={category} />
      </div>
    </div>
  )
}

export default WhiteCards;