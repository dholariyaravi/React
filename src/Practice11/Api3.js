import React, { useState,useEffect } from 'react'

export default function Api3() {
      
    const [data,setdata]=useState([]);

    useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
    .then( p=> p.json())
    .then( p => {
        setdata(p)
    })
       
    }, []);

  return (
    <div>
        <table>
            {data.map((val) => {
                return(
                    <tr>
                        <td>{val.id}</td> 
                        <td>{val.name}</td> 
                        <td>{val.tagline}</td> 
                        <td>{val.first_brewed}</td> 
                        <td>{val.description}</td> 
                        <td>{val.image_url}</td>  
                        <td>{val.target_og}</td> 
                    </tr>
                )
            })}
        </table>
    </div>
  )
}
