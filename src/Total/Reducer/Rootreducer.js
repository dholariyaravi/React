import { combineReducers } from 'redux';
import Countarred from './Countarred';
import Userreducer from './Userreducer';
export default combineReducers ({

    counter1 : Countarred ,
    user : Userreducer
   

});