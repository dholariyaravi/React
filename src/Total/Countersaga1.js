import React from 'react';
import {useDispatch,useSelector} from 'react-redux';

 export default function Countersaga1 () {

 
   const count = useSelector(p =>p.counter1);

    const diss = useDispatch();

     const increment1 = () => {
        diss ({type: 'Increment11'});
     }


     const decrement1 = () => {
        diss ({type: 'Decremen11'});
     }

     
     const modual1 = () => {
        diss ({type: 'modual111'});
     }



    return (
        <div>
            {count}
            <button onClick={increment1}>count</button>
            <button onClick={decrement1}>decrement</button>
            <button onClick={modual1}>modual</button>
            
        </div>
    );
}


