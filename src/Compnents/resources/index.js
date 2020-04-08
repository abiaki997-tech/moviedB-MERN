import React ,{Component} from 'react';
// import memoize from 'lodash/memoize';
import axios from 'axios';
import dotenv from 'dotenv'
import {TiChevronLeftOutline,TiChevronRightOutline} from 'react-icons/ti'
import '../all_pages/Home.css';

dotenv.config();
const API_KEY=process.env.REACT_APP_API_KEY;
const API_URL='https://api.themoviedb.org/3/'


//fetch (logic) Compnent
class Resource extends Component {

  state={
    loading:false,
    payload:[],
    currentPage:1,
    backPage:1,
    moviesPerPage:21
  }


 
  componentDidMount(){
    console.log('Intial after mounting first time')
   const endpoint = 
   `${API_URL}${this.props.path}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
   this.fetchdata(endpoint)
  };
 

  componentDidUpdate(prevProps){
    console.log('every update')
    if(prevProps.Item !== this.props.Item){
      this.fetchdata(
       `${API_URL}${this.props.path}?api_key=${API_KEY}&query=${this.props.Item}&language=en-US&page=1&include_adult=false`
      );
    };
  };

  //api_function
  fetchdata =(url)=>{
console.log( "hi "+ url)
    axios.get(url).then(result=>{

      this.setState({
        payload:result,
        loading:false
      })
      
    })
  }

//load button triggers function
  loadMoreItems = () => {
    let  url=  `${API_URL}${this.props.path}?api_key=${API_KEY}&${this.props.que && this.props.que + this.props.Item}&language=en-US&page=${this.state.currentPage+1}&include_adult=false`;
    this.setState({currentPage:this.state.currentPage+1})
    this.fetchdata(url);
    };
//back button
backMoreItems = () => {
  let  url=  `${API_URL}${this.props.path}?api_key=${API_KEY}&${this.props.que && this.props.que + this.props.Item}&language=en-US&page=${this.state.currentPage-1}&include_adult=false`;
  // this.setState({backPage:this.state.backPage+1})
  this.fetchdata(url);
  };


  render(){

    return (
      <div>
    
     <div className={this.props.Item?"movie_search_view":''}>
       {this.state.payload.data  && this.props.render(this.state)}
     </div>
       

{/* load button */}
  { 
    this.state.payload.data && this.props.loadmore &&  

     <div className="btn_arrange">
  

         <p className="back_button"  onClick={this.backMoreItems}><TiChevronLeftOutline/></p>
         <p className="next_button" onClick={this.loadMoreItems}><TiChevronRightOutline/></p>
  
         

  
  </div>
  } 
 {/* className={this.props.Item?"loadMore":"loadMoreItems"}  */}


      </div>
      )};
    };

export default Resource;