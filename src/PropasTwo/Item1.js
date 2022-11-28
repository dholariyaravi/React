import React from 'react'
import MYcowiddata from '../Practice/MYcowiddata'

export default function Item1(propas) {

  return (
    <div>
        {propas.round.map( (item , index) => {
            return (<div>{item.cno} {item.cname} <button onClick={()=>{propas.remove(index)}}>x</button></div>)

        })}
    </div>
  );
}
