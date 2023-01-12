import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts1 = createAsyncThunk(
    'postc11/getPosts1',
    async () => {
        return fetch(
            `https://fakestoreapi.com/products`
        ).then(r=>r.json());
    }
);


const Out = createSlice({
  name: 'postc11',
  initialState :{
      list1:[],
     difad : null ,
  },

  extraReducers :{
    [getPosts1.pending] : ( state,actions) => {
        state.difad = 'loading'
    },

    [getPosts1.fulfilled] : (state,actions) => {
        state.list1 = actions.payload;
       state.difad = 'success';
    },

    [getPosts1.rejected] : (state,actions) => {
        state.difad = 'failed';
    },
  }
 
});



export default Out.reducer