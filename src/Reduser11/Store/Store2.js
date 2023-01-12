
import {configureStore} from "@reduxjs/toolkit"
import Reduser1 from "../Reduser1"
import postsSlice from "../Post/postsSlice";
import DPostS from "../PostDemo2/DPostS";
import Out from "../PrecTiS1.js/Out";



export const Store2 = configureStore({
    reducer:{
        counter1: Reduser1,
         posts: postsSlice,
         
         Posts1: DPostS,
         
         postc11 : Out

        
         
    },
});


export default Store2;