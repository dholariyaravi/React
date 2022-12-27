import React, { useEffect, useState } from 'react'

export default function Prectis() {

    const [data,setdata] =useState([]);

    useEffect( ()=> {
        fetch('https://fakestoreapi.com/products')
        .then(p =>p.json())
        .then( p=>{
            setdata(p);
        });
    },[])


    const asending = () => {
      let mydata = data.sort(function(a,b) {
  
        if(a.id > b.id)
        return 1
        else
        return -1;
  
      })
      // fachData(mydata)
    }
  
    const disending = () => {
      let mydata1 = data.sort(function(a,b) {
  
        if(a.id > b.id)
        return -1
        else
        return 1;
  
      })
  
      // console.log(mydata1);
      // fachData(mydata1)
      // console.log(data);
    }


  return (
    <div>
        {/* <table>
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
        </table> */}
        {data.map ((elment) =>{
            return (<>{elment.id} </> )
         })
        }

        <button class="btn btn-danger" onClick={asending}>click</button> 
        <button class="btn btn-dark" onClick={disending}>Add</button>
         
    </div>
  )
}
