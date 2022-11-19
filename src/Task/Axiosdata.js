import axios from 'axios';
import React , {useEffect, useState} from 'react'

export default function Dataaxios() {

   const [data1, setdata] = useState([]);

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( p => {
            setdata(p.data)
        }) ;
    }, [])

  return (
    <div>
        <table>
          { data1.map( (val) => {
            return(
              <tr>
                <td>{val.name}</td> 
                <td>{val.username}</td> 
                <td>{val.address.street}</td>
              </tr>
            )
           
          })}

        </table>
    </div>
  )
}
// ======================================================== 
