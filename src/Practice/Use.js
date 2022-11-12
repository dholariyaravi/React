
import React, { useState } from 'react'

function Countar() {
 const [Data,setdata] =useState("");
 const [Total,settotal]= useState(5);

 const Chennj = (p) => {
   setdata (p.target.value);
 };
 
 const Chenjbutton =() => {
    settotal (Total+ parseInt(Data) );
 }

 return(
    <>
    <hr/>
    <h1> my numuber:{Total}</h1>

    <input type='text'
     value={Data} onChange={Chennj} />

    <button onClick={Chenjbutton}>clik me 12</button>
    </>
 )
};

// ==================+++++++++++++++ 


export default function Use() {
    const [updat,setupat] = useState(100);
     
    const Number = () => {
        setupat(updat -10);
    }

  return (
    <div>
        <h1> my number is {updat}</h1>
        <button onClick={Number}>click me</button>
        <Countar/>
        
    </div>
  )
}
