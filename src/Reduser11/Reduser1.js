import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    value: 0,
}

const Reduser1 = createSlice({
  name:'counter',
  initialState,
  reducers: {
  
    increment: (state) => {
        state.value += 1;
    },
    decrement: (state) => {
       if (state.value > 0){
        state.value -= 1;
       }
    },
    incrementByAmount: (state,actions) => {
        state.value +=  parseInt(actions.payload);
    },
  },
});

export const {increment,decrement,incrementByAmount} = Reduser1.actions

export default Reduser1.reducer