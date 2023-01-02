import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';


export function* inWork1()
{
    yield delay (1000);
    yield put ({ type : 'Decrementn' });
}

export function* incrementWatcher()
{
    yield takeEvery('Decremen11',inWork1)

}


export function* inWorkdd()
{
    yield delay (1000);
    yield put ({ type : 'Increment' });
}
export function* incrementWatcher11()
{
    yield takeEvery('Increment11',inWorkdd)

}


export function* inwok111()
{
    yield delay (1000);
    yield put ({ type : 'modual' });
}
export function* incrementWatc123()
{
    yield takeEvery('modual111',inwok111)

}