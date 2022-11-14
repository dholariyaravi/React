import React, { useEffect, useState } from 'react'

export default function Exam() {
    const [data,setdata] = useState ([]);

  useEffect ( () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
   .then(e => e.json())
   .then (e=> {
     setdata (e);
   });

  },[])
  return (
    <div>
        <table>
            {data.map( (element) => {
                return(
                    <tr>
                      <td>{element.userId}</td>
                       <td>{element.id}</td> 
                       <td>{element.title}</td> 
                       <td>{element.body}</td>
                    </tr>
                )
            })
            }
        </table>
    </div>
  )
}
