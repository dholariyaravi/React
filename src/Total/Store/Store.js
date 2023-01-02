import {createStore , applyMiddleware} from 'redux';
import Rootreducer from '../Reducer/Rootreducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../Saga/rootSaga';


// const Middleware = [thunk];

const sagaMiddleware = createSagaMiddleware();

const Middleware  = [sagaMiddleware];


const store = createStore (Rootreducer, applyMiddleware(...Middleware));

sagaMiddleware.run(rootSaga);



export default store ;