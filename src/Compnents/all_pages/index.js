import React ,{lazy,Suspense,useState}from 'react'
import './Home.css';
import '../auth_pages/navbar/style_nav.css'
import Loading from '../../assets/tenor.gif';
import Moviecontainer from '../moviecontainer/moviecontainer';
import MovieView from '../movieView';

// import Resource from '../resources';
const Resource = lazy(()=> import('../resources/index'))

//Home PaGE
export function Home () {
 return(

   <div className="view-contaigner">
     {/* fetch component */}
     <Suspense fallback={<img src={Loading} alt="abc" className="img_loading"/>}>
        <Resource 
          path='movie/top_rated'
          loadmore = "true"
          render={data=> <Moviecontainer data={data}/>}
        />     
      </Suspense>
   </div>

 )
};


//Movie details page
export function Movie(props){
  
   const area =`movie/${props.match.params.id}`;

  return(
 
      <div className="view-container">
      <Suspense fallback={<img src={Loading} alt="abc" className="img_loading"/>}>
       <Resource 
          path={area}
          // render={data=>  <MovieView data={data.payload.data} />}
          render={data => <MovieView data={data.payload.data} /> }
        />
     </Suspense>
    </div>

  )
};



//movie Search Component
export function SearchBar(){

  const [userInput, setUserInput] = useState("");
  const [movie, setmovie] = useState("");

  
    const handleSubmit = e => {
      e.preventDefault();
      setmovie(userInput);
    };
  
    const onChange = e => {
      setUserInput(e.target.value);
    };


  return(
<Suspense fallback={<h1>Loading more</h1>}>
<div className="view_search">

{/* searchForm */}
  <div>
    <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control"
          placeholder="Movie Name.."
          name="userInput"
          value={userInput}
          onChange={onChange}
        />
        <button className="btn" type="submit" className="style_search" >
          Search
        </button>
        
    </form> 
    
  </div>
  <Suspense fallback={<img src={Loading} alt="abc" className="img_loading"/>}>
       <Resource 
         path='search/movie'   
         Item={movie}
         loadmore ="true"
         que='query='
         render={data=> <Moviecontainer data={data}/>}
        />
   </Suspense>     
    </div>
  </Suspense>
  )
};



