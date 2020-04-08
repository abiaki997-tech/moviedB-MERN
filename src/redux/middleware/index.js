import {put,call,takeLatest,takeEvery} from'redux-saga/effects';
import {fetchData, logout} from '../api';
import { loginRecieve,loginRecieveError,logoutRecieve,logoutRecieveError } from '../action_creaters/auth_actions';

function* requestApidata (action){

  const {response,error} = yield call(fetchData,action.payload);

// console.log(response);

// console.log(errorsd);
if(response){
  yield put(loginRecieve(response))
}
else{
  yield put(loginRecieveError(error))
}
};

function* requestLogout (action){

  const {response,error} = yield call(logout);

if(response){
  yield put(logoutRecieve(response))
}
else{
  yield put(logoutRecieveError(error))
}
}


export default function* sagawatching (){
  yield takeEvery('LOGIN_API',requestApidata)
  yield takeEvery('LOGOUT_API',requestLogout)
};

