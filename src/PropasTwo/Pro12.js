import React,{useState,useEffect} from 'react';
import Propas123 from './Propas123';

export default function Pro12() {
 
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then( p => p.json())
        .then(p => {
            setdata(p)
        })
        
    }, []);

  return (
    <div className='row'>
        <table>
            {data.map((value) => {
                return(
               <Propas123  recod={value}></Propas123>
                )
            })}
        </table>
    </div>
  )
}
