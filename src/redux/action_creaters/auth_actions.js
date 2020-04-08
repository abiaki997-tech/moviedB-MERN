export const REQUEST_REGISTER_DATA = 'REQUEST_REGISTER_DATA';
export const RECIEVE_REGISTER_DATA = 'RECIEVE_REGISTER_DATA';
export const RECIEVE_REGISTER_ERROR = 'RECIEVE_REGISTER_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const LOGIN_API='LOGIN_API';
export const LOGIN_RECIEVE='LOGIN_RECIEVE';
export const LOGIN_RECIEVE_ERROR='LOGIN_RECIEVE_ERROR';
export const LOGOUT_API='LOGOUT_API';
export const LOGOUT_RECIEVE='LOGOUT_RECIEVE';
export const LOGOUT_RECIEVE_ERROR='LOGOUT_RECIEVE_ERROR';

export const requestRegister =(data)=>{
 return{
   type:REQUEST_REGISTER_DATA,
   payload:data
 }
};

export const recieveRegister =(data)=>{
  
  return{
    type:RECIEVE_REGISTER_DATA,
    payload:data
  }
};

export const recieveRegisterError =(data)=>{
  
  return{
    type:RECIEVE_REGISTER_ERROR,
    payload:data
  }
};

export const loginAction = (data)=>{
 
  return{
     type:LOGIN_API,
     payload:data
  }
};

export const loginRecieve =(response)=>{
  return{
   type:LOGIN_RECIEVE,
   payload:response.data.message
  }
};

export const loginRecieveError =(error)=>{
  console.log(error.response.data.message)
 return{
   type:LOGIN_RECIEVE_ERROR,
   payload:error.response.data.error
 }
};

export const logoutAction = ()=>{
  return{
     type:LOGOUT_API
  }
};

export const logoutRecieve =(response)=>{
  console.log('logout success')
  return{
   type:LOGOUT_RECIEVE,
   payload:response.data.message
  }
};

export const logoutRecieveError =(error)=>{
  console.log(error.response.data)
 return{
   type:LOGOUT_RECIEVE_ERROR,
   payload:error.response.data.error
 }
};

export const clearError = ()=>{
  return{
    type:CLEAR_ERROR
  }
};