
import {configureStore} from "@reduxjs/toolkit"
import Reduser1 from "../Reduser1"
import postsSlice from "../Post/postsSlice";
import DPostS from "../PostDemo2/DPostS";



export const Store2 = configureStore({
    reducer:{
        counter1: Reduser1,
         posts: postsSlice,
         
         Posts1: DPostS,

        
         
    },
});


export default Store2;