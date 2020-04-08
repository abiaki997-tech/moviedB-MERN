import React from 'react';
import {Link} from 'react-router-dom'
import Loading from '../../assets/tenor.gif'
import '../moviecontainer/moviescontainer.css'
import '../auth_pages/navbar/style_nav.css'
import Paginate from '../paginate'
const IMG_URL='http://image.tmdb.org/t/p/original';


function Moviecontainer ({data}){

  const move = data.payload.data.results;

return(
  
    <div className="movies-container-main">
    
      { move ? move.map(movie => {
        
      return(
        
        <div key={movie.id} className='movie-card'>
          <Link to={`/movie/${movie.id}`}>
          
              <img style={{ height: '75%', width: '100%' }} 
                  src={IMG_URL+movie.poster_path } 
                  alt='movie poster'>
              </img>
              <h3>{ movie.title }</h3>
              <p >Rating: { movie.vote_average }/10</p>
         </Link>   
       </div>

      
      )
      })
    : <img src={Loading} alt="abc"/>
    }
    


    </div>
)}


export default Moviecontainer;