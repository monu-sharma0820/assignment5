import React, { useRef } from 'react';
import image from '../Images/poster-icon.png';
import '../Style/card.scss';

function Cards({movie}) {

  return (
    <div className='card-container'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  className='img-fluid'/>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
    </div>
  )
}

export default Cards;