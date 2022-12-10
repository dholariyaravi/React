import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Increment } from './action';
import { Decrementn } from './action';  
import { Modual } from './action'; 

export default function Counter() {

    const data1 = useSelector(p=>p);

    const mycoun =useDispatch();

    const increment1 = () => {
       mycoun(Increment()) 
    }

    const decrementn1 = () => {
        mycoun(Decrementn()) 
     }

     const modual1 = () => {
        mycoun(Modual()) 
     }
    
  return (
    <div>{data1}
   <button onClick={increment1}>+++++</button>      
   <button onClick={decrementn1}>------</button>    
   <button onClick={modual1}>****</button>      
    </div>
  )
}
