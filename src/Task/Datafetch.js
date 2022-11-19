import React, { useState,useEffect } from 'react'

export default function Datafetch() {

    const [data,setdata] = useState([]);

  useEffect ( () => {
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(e => e.json())
   .then (e=> {
     setdata (e);
   });
        
    }, []);

  return (
    <div>
        <table>
            { data.map( (element) => {
                return(
                    <tr>
                       <td>{element.email}</td>
                       <td>{element.address.street}</td>
                       <td>{element.address.suite}</td>
                       {/* <td>{element.body}</td> */}

                    </tr>
                ) 
            })}
        </table>
    </div>
  )
};

// ==================================================================== 

//   return (
//     <div>
//         <table>
//             {data.map( (element) => {
//                 return(
//                     <tr>
//                       <td>{element.userId}</td>
//                        <td>{element.id}</td> 
//                        <td>{element.title}</td> 
//                        <td>{element.body}</td>
//                     </tr>
//                 )
//             })
//             }
//         </table>
//     </div>
//   )
// }

