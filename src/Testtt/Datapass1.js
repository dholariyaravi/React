import React, {useState, useEffect} from 'react'
import Datatest2 from './Datatest2';



export default function Datapass1() {

    const [data, setdata] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(p => p.json())
    .then(p => {
        setdata(p)
    })
    }, []);

  return (
    <div>
        <table>
        {data.map((val) => {
            return(
            <Datatest2 find={val}></Datatest2>
            )
         })}
        </table>


    </div>
  )
}
