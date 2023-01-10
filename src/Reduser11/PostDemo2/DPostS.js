import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () =>{
        return fetch(
            `https://fakestoreapi.com/products` 
        ).then(r=>r.json());
    }
);


 const DPostS = createSlice({
  name: 'posts',
  initialState :{
    list: [],
    status: null
  },
  extraReducers :{
    [getPosts.pending] : (state,actions) => {
        state.status = 'loading';
    },

    [getPosts.fulfilled] : (state,actions) => {
        state.list = actions.payload;
        state.status = 'success';
    },

    [getPosts.rejected] : (state,actions) => {
        state.status = 'failed';
    },
  }
});


export default DPostS.reducer

