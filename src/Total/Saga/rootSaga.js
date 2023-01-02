import { incrementWatc123, incrementWatcher, incrementWatcher11 } from "./Countersaga";
import  {all} from 'redux-saga/effects'



export default function* rootSaga()
{
    yield all ([incrementWatcher(), incrementWatcher11(),incrementWatc123()]);
}