import React,{useState,useEffect} from 'react'
import Task4 from './Task4';


export default function Task33() {

    const [data, setdata] = useState([]);


    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(p => p.json())
      .then( p => {
        setdata(p)
      })
       
    }, []);


  return (
    <div>
        <table>
            {data.map((val) => {
                return(
                     <Task4 find1={val}></Task4>
                )
            })}
        </table>
    </div>
  )
}
