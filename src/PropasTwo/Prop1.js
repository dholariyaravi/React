import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Propas13 from './Propas13';

export default function Prop1() {
 
    const [data1, setdata1] = useState([]);

    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/photos")
     .then(h => {
        setdata1(h.data)
     })
    }, []);
    
  return (
    <div className='row'>
        <table>
            {data1.map ((value) => {
                return(
                  <Propas13 recod={value}></Propas13>
                )   
            })}
        </table>
    </div>
  )
}
