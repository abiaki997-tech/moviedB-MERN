import React from 'react';
import './movieView.css'
import Loading from '../../assets/tenor.gif'
const IMG_URL='http://image.tmdb.org/t/p/original';

export default function MovieView({data}){
  // const datamovie = data.payload.data.results
  console.log(data)
  return(
    <div className="movies-main">
     
      {data ?

      <div className="movie-view">
       
       <div className="box1"> 
          <img 
            className="img_area"
            src={IMG_URL + data.poster_path}>
          </img>
      </div>
        {/* Movie DETAILS */}
      
      <div className="box2">
      <h1 className="hea">{data.title}</h1>
        <h2>Rating: {data.vote_average}</h2>
        <h4>Languages: {data.spoken_languages ? data.spoken_languages.map((item,index)=><span key={index}>{item.name} </span>):""}
        </h4>

        <h3>RunTime: {data.runtime} minutes</h3>

        <h4> Genres: {data.genres ? data.genres.map((item,index)=><span key={index}>{item.name}  </span>) : ""}
        </h4>
        <h4>Release Date: {data.release_date}</h4>
      
   

        <p className="plot"><strong>Plot:</strong> {data.overview}</p>
        </div>
        </div> : <img src={Loading} alt="smiley" />}
    
    </div>
  )
}