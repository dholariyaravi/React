import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { AsncMinus, Increment } from './action/Action';
import { Decrementn } from './action/Action';  
 


export default function Counter() {

    const data1 = useSelector(p=> p.counter1);

    const mycoun =useDispatch();

    const increment1 = () => {
       mycoun(Increment()) 
    }

    const decrementn1 = () => {
        mycoun(Decrementn()) 
     }

     const decrementcounter = () =>{
        mycoun(AsncMinus(5))
     }

     
    
  return (
    <div>
      {data1}
   <button onClick={increment1}>+++++</button>      
   <button onClick={decrementn1}>------</button>    
   
   <button onClick={decrementcounter}>counter--</button>     

  
    </div>
  );
}
