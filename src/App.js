import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Login from './Compnents/auth_pages/login';
import Register from './Compnents/auth_pages/register/auth_formik';
import NavBar from './Compnents/auth_pages/navbar';

// const Home = lazy(()=>import('./Compnents/all_pages'))
import {Home,SearchBar,Movie} from './Compnents/all_pages';

import './App.css';
import './Compnents/auth_pages/navbar/style_nav.css'



function App() {

  return (
  <div>
  <Suspense fallback={(<div>Loading.</div>)}>
<Router>
   <NavBar/>

  <Switch>

    <Route exact path="/" component={Register}/>
    <Route exact path="/login" component={Login}/>

    <Route exact path='/home' component={Home}/>
    <Route exact path='/movie/search' component={SearchBar}/>
    <Route  path="/movie/:id"  component={Movie}/>

    
    
  </Switch>

</Router>
</Suspense>
  </div>
  )
};

export default App;
