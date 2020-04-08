import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagawatching from '../middleware';
import reducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const dev = compose( applyMiddleware(sagaMiddleware),composeEnchancers);

const store = createStore (
  reducer,
  dev
  );

//watching
sagaMiddleware.run(sagawatching) ;

export default store;



