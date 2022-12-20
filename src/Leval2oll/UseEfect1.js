import React,{useState,useEffect} from 'react'
import Child from './Counter';

export default function UseEfect1(props) {

    const [data,setdata] = useState([]);
   

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit='+ props.data)
        .then( p =>p.json())
        .then(p => {
         setdata(p)
          console.log(p)
        })
    }, [props.data]);

   

 

  return (
    <div>
        
     
    </div>
  )
}
