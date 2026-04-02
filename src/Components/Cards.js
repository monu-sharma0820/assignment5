import React from 'react';
import '../Style/card.scss';

function Cards({movie}) {

  return (
    <div className='card-container'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  className='img-fluid' alt='movieimage'/>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
    </div>
  )
}

export default Cards;