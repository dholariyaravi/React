
import {configureStore} from "@reduxjs/toolkit"
import Reduser1 from "../Reduser1"
export const Store2 = configureStore({
    reducer:{
        counter1: Reduser1,
    },
});


export default Store2;