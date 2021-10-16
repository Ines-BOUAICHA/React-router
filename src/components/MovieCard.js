import React from 'react'
import Rating from './Rating'
import './MovieCard.css'
import {Link} from 'react-router-dom'


const MovieCard = ({el}) => {
    return (
        <div>
<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src= {el.url} alt='pic'/>
      <h1>{el.name}</h1>
      <Link to ={{pathname:"/info", state:{el:el}}}> {el.name} </Link>
      <span class="rating"><Rating rate={el.rate}/></span>
      <h4>{el.date}, {el.réalisateur} </h4>
      <p>{el.type}</p>
      
      
    </div>
  </div>
  <div class="blur_back bright_back">
  <img style={{ height: " 100%", width: "100%"}} src={el.url} alt='img' /></div>
  </div>
  
</div>

    )
}
export default MovieCard