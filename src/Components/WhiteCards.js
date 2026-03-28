import React, { useEffect, useRef, useState } from 'react';
import Header from './Header'
import '../Style/common.scss';
import '../Style/blackcard.scss';
import Banner from './Banner';
import Trending from './Trending';
function WhiteCards() {
  const [category, setCategory] = useState("popular");
  const trendingRef = useRef(null);
  return (
    <div className='right-container whitecard '>
      <Header setCategory={setCategory} trendingRef={trendingRef}/>
      <Banner />
      <div ref={trendingRef}>
        <Trending category={category} />
      </div>
    </div>
  )
}

export default WhiteCards;