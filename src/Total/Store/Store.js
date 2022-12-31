import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Rootreducer from '../Reducer/Rootreducer';

const Middleware = [thunk];

const store = createStore (Rootreducer, applyMiddleware(...Middleware));



export default store ;