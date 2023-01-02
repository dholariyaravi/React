// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import  { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

export function* watchFetchPost() {
    yield takeEvery('FETCH_POSTS_REOUEST', workFetchPosts);
  }
  
  
  export function* workFetchPosts() {
    try {
      // Try to call the API
      const uri = `https://jsonplaceholder.typicode.com/photos`;

      const response = yield call(axios.get, uri);
  
      // Dispatch the action to the reducers
      yield put({
        type: 'FETCH_POSTS_SUCCESS',
        payload: response.data
      });
    } catch (error) {

        yield put({
            type: 'FETCH_POSTS_ERROR',
            payload: error 
          }); 

      // Act on the error
      console.log('Request failed! Could not fetch posts.');
    }
  }