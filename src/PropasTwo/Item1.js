import React from 'react'
import MYcowiddata from '../Practice/MYcowiddata'

export default function Item1(propas) {

  return (
    <div>
        {propas.round.filter((val)=>{
       return val.fname.toUpperCase().indexOf(propas.find.toUpperCase()) >=0;

        }).map( (item , index) => {
            return (<div> {item.fname}{item.lname} {item.city} {item.university}
                          {item.email}  {item.cno} {item.university1}
            
             <button onClick={()=>{propas.remove(index)}} className="btn btn-dark m-1">delete</button>
              <button onClick={()=>{propas.add(index)}}  className="btn btn-dark">Edit</button>

              </div>)

        })}
    </div>
  );
}
