import axios from 'axios';
import React, { useState,useEffect } from 'react'

export default function Deletappi() {

     const [data, setdata] = useState([]);

     useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(p => p.json())
     .then( p => {
       setdata(p)
     })
     
     }, []);

  return (
    <div>
      <table>
        {data.map((val)=> {
            return(
              
               
                  <tr>
                    <td>{val.albumId}</td>
                    <td>{val.id}</td>
                    <td> {val.title}</td>
                    {/* <td><button onClick={deleted}></button></td> */}
                  </tr>
            )
        })}
        </table>
        
    </div>
  )
}
