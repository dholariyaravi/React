import React, { useEffect, useState } from 'react'
import'./Preec.css';

export default function Prectis() {

    const [data,setdata] =useState([]);

    useEffect( ()=> {
        fetch('https://fakestoreapi.com/products')
        .then(p =>p.json())
        .then( p=>{
            setdata(p);
        });
    },[])

    function Click() {

    }
    function add (){

    }

  return (
    <div>
        <table>
        {data.map((elment) => {
            return(
               <tr>
                 <img src={elment.image} className="t24"/>
                <td class=''>{elment.id} </td>
                <td class="">{elment.title}</td>
                <td> {elment.description}</td>
                <td>{elment.price}</td>
                </tr>
             );  
        })  
        }
        </table>

        <button class="btn btn-danger" onClick={Click}>click</button> 
        <button class="btn btn-dark" onClick={add}>Add</button>
         
    </div>
  )
}
