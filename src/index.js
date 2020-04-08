import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import FormControl from './user_form'
// import Login from './Compnents/auth_pages/login';



ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
,document.getElementById('root'));


serviceWorker.unregister();
