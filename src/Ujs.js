import React, { useEffect, useState } from 'react'

  
    function Ufect() {
    const [value,setvalue]= useState(0);
    const [add, setadd] = useState(0);

    useEffect( () => {
      setadd ( () => value * 2);
    });

    return (
     <>
       <h1> value : {value}</h1>
       <button type='button' onClick={ ( () => setvalue ( (k) => k + 1))}>+</button>
       <h1> modual : {add}</h1>
       
     </>
     
    )
  }
  



export default function Ujs() {
    const[time,settime] = useState(0);

  useEffect( ()=> {
    setTimeout ( () => {
      settime ( (p) => p + 1);
    },1000);
  }, );
   

  return (
    <div>
     <h1> my curren time is {time}</h1>
     {/* <button type='button' onClick={'clikuse'}>click</button> */}
     <Ufect/>
    </div>
  );
}
