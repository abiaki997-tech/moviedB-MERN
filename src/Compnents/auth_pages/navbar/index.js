import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Redirect, Link,withRouter} from 'react-router-dom'
import  movie from '../../../assets/movie-logo.jpg'
import './style_nav.css';
import { logoutAction } from '../../../redux/action_creaters/auth_actions';



function NavBar(props){
 

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth_reducer.isAuth);
  const logout = useSelector(state => state.auth_reducer.logout)


  console.log(props)
  useEffect(()=>{
    if(logout===true){
      console.log(props.history.push('/login'))
      console.dir(props.history.push('/login'))
      props.history.push('/login')
    }
  },[logout===true]) 



  if(isAuth===true){
    return(
      <div className="contain">
      <img 
       src={movie}
       alt="imgs"
       className="logo"
       />
      <nav>

           <ul class="nav_links">
             <li>
               <Link to="/home">
                 <p >Home</p>
               </Link>
             </li>

             <li>
               <Link to="/movie/search">
                 <p >Search</p>
               </Link>
             </li>

             <li>
                 <p onClick={ ()=>dispatch(logoutAction())}>LogOut</p>  
             </li>

           </ul>
       </nav>

     </div>
    )
    //
  }
  else{
    return(
          " "
      )
  }
  
};

export default withRouter(NavBar);


