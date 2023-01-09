
import {configureStore} from "@reduxjs/toolkit"
import postsSlice from "../Post/postsSlice";
import Reduser1 from "../Reduser1"

export const Store2 = configureStore({
    reducer:{
        counter1: Reduser1,
         posts: postsSlice
    },
});


export default Store2;