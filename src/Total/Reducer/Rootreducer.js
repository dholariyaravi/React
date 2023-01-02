import { combineReducers } from 'redux';
import Countarred from './Countarred';
import Userreducer from './Userreducer';
import Redusaga from './Redusaga';
export default combineReducers ({

    counter1 : Countarred ,
    user : Userreducer,
    posts : Redusaga
   

});