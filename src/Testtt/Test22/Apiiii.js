import React ,{useState, useEffect} from 'react'

export default function Apiiii() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(p => p.json())
        .then( p => {
            setdata(p)
        });
       
    }, []);

  return (
    <div>
        {data.map( (val) => {
            return(<h3>{val.id} </h3> )
        })}
    </div>
  )
}
