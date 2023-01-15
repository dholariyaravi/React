import axios from 'axios';
import React, { useState,useEffect} from 'react'

export default function Apppi2() {
 
     const [data, setdata] = useState([]);

     useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( p => {
          setdata(p.data)
        });
     }, []);
     
  return (
    <div>
      <table>

      
      {data.map((val) => {
        
        return(
          <div>
             <tr>
              <td> {val.id}</td>
              <td> {val.name}</td>
              <td>{val.username}</td>

              <td> {val.email}</td>
              <td> {val.address.street}</td>
              <td>  {val.address.suite} </td>
              <td>  {val.address.city} </td>
             </tr>
        </div> 
        )
      })}
       </table>
    </div>
  )
}
