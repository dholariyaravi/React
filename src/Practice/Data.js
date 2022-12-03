
import React, { useState } from 'react';
import reviews from "./map.js";



export default function Data() {

  const [file,setfile]= useState();

  const Chenjdata = (p) => {
     setfile(p.target.value)
    }

  return (
    <>
    <h4>
    {reviews.filter((value,indet,array) =>{
         return value.name.indexOf(file) >=0;

    }).map((event) => { 
     return( <h2>{event.name}</h2> );
       })
       }      

     <input type='text' onChange={Chenjdata}/>

     <button type='button' >click</button>
     <b>{setfile}</b>
     </h4>
    </>
  );
}
