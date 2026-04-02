import React, { useEffect, useRef, useState } from 'react';
import '../Style/trending.scss';
import trendingicons from '../Images/trending-icon.png'
import { getMovie , getCategoryMovie } from './APicall';
import Cards from './Cards';
function Trending({category }) {
  const[movie , setmovie] = useState([]);
  const containerRef = useRef(null);
  useEffect(()=>{
  const fetchdata = async()=>{
    let data;
    if(!category)
    {  
      data =  await getMovie();
    }
    else
      {
      data = await getCategoryMovie(category);
    }
    setmovie(data);
  }
  fetchdata();
  },[category]);

  return (
    <div className='trending-container'>
      <div className='title-container'>
        <div className='trending'>
          <img src={trendingicons} alt='image-one' />
          <h2>Trending</h2>
          <div className="line"></div>
        </div>
        <span>See More</span>
      </div>
      <div className='moviecards'  ref={containerRef}  style={{ display: "flex", overflowX: "auto" }}>
        {
          movie && movie.map((movie) => (
            <Cards key={movie.id} movie={movie}  />
          ))
        }
      </div>
    </div>
  )
}

export default Trending;