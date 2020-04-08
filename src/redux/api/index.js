import axios from 'axios';

//login
export const fetchData = (payload)=>{

  const option ={
        data:payload,
        // headers:{
        //   'Content-Type':'application/json'
        // },
        // withCredentials:'inculde'
  };

   return axios.post('/auth/login',option)
     .then(response => ({ response }))
     .catch(error => ({ error }))
  
};

//logout
export const logout = ()=>{
   
  return axios.post('/auth/logout',{withCredentials:true})
      .then(response=>({response}))
      .catch(error=>({error }))
};
