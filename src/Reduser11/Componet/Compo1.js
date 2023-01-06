import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../Reduser1';

function Component11 () {
       const dispath = useDispatch();
       const counter = useSelector((state) => state.counter1);
       const [state, setstate] = useState(0);

      const hedal = (e) => {
        setstate(e.target.value)
      }
     
    return(
     <>
     <p>{counter.value}</p>
     <button onClick={() =>dispath(decrement())}>decrement1</button>
     <button onClick={() =>dispath(increment())}>increment1</button> <br/><br/>
     <button onClick={() =>dispath(incrementByAmount(state))}>incrment</button> <br/><br/>
     <input type='text' onChange={hedal}/>
      
     
     </>
    )
 
}

export default Component11;
