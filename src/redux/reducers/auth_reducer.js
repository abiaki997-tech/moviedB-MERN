import {CLEAR_ERROR,LOGIN_RECIEVE,LOGIN_RECIEVE_ERROR,LOGOUT_RECIEVE,LOGOUT_RECIEVE_ERROR } from '../action_creaters/auth_actions'


const intialstate ={
  error:null,
  loading:true,
  isAuth:null,
  user:null,
  logout:null
};

const authReducer = (state =intialstate, {type,payload})=>{
  
switch(type){
    case LOGIN_RECIEVE:
      return{
       ...state,
       user:payload,
       isAuth:true,
       loading:null
      }
    
  case LOGIN_RECIEVE_ERROR:
    return{
      ...state,
      error:payload,
      loading:null
      }

      case LOGOUT_RECIEVE:
        return{
         ...state,
         user:payload,
         isAuth:null,
         logout:true,
         loading:null
        }
      
    case LOGOUT_RECIEVE_ERROR:
      return{
        ...state,
        error:payload,
        isAuth:true,
        loading:null
        }    
  case CLEAR_ERROR: 
    return{
     ...state,
     error:null,
     isAuth:null
  }
    default:
      return {...state}
  }
};

export default authReducer;