import { put, takeEvery, takeLatest, delay } from 'redux-saga/effects';


      // Increment....... 
export function* inWorkdd()
   {
     yield delay (1000);
     yield put ({ type : 'Increment' });
   }
export function* incrementWatcher11()
   {
     yield takeLatest('Increment11',inWorkdd)
      
    }


export function* inWork1()
{
    yield delay (1000);
    yield put ({ type : 'Decrementn' });
}

export function* incrementWatcher()
{
    yield takeEvery('Decremen11',inWork1)

}


        // modual........ 
export function* inwok111()
{
    yield delay (1000);
    yield put ({ type : 'modual' });
}
export function* incrementWatc123()
{
    yield takeEvery('modual111',inwok111)

}