import React, { useEffect, useState } from 'react'
import "./CSS/Jsxdata.css"

export default function JsxData() {

    const [updet,setupdet] = useState([]);
    const [file,setfile]= useState();

    useEffect ( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(k => k.json())
       .then(k =>{
          setupdet(k)
       });
    },[])

    const Chenjdata = (p) => {
      setfile(p.target.value)
     }

  return (
    <div>
        <h4>
    {updet.filter((value,index,array) =>{
         return value.name.indexOf(file) >=0;
       })
    .map((event) => { 
     return( <h2>{event.name}</h2> );
       })}
     <input class="p-1"  type='text' onChange={Chenjdata}/>

     <button class="btn btn-dark m-2" type='button'>click</button>
     <b>{setfile}</b>
     </h4>

   {/* -------------------------------------------------------------------  */}
        <table>
       { updet.map( (element) => {
        return(
           <tr>
              <td> {element.id}</td>
              <tr><td> {element.name}</td></tr> 
               <tr> <td>  {element.username}</td> </tr>
               <td> {element.email}</td> 
         <td> {element.address.street}</td>
         <td> {element.address.suite} </td>
         <td>  {element.address.city}</td>
         <td>  {element.address.zipcode}</td>
         <td>{element.address.geo.lat}</td>
         <td>{element.address.geo.lng}</td> 

              <td> {element.phone}</td> 
            <  td> {element.website}</td>  
         <td>{element.company.name}</td> 
         <td>{element.company.catchPhrase}</td>
         <td>{element.company.bs}</td>
             </tr>
           );
       }) 
       }
       </table>

     </div>
  )
}
