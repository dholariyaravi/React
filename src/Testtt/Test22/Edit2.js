import React from 'react'
import Item from '../../PropasTwo/Item'

export default function Edit2(propas) {
  return (
    <div>
        {propas.round.filter((e) => {
            return e.Fname.toUpperCase().indexOf(propas.find.toUpperCase()) >=0;
            
        }).map((item,index) => {

            return(<div>{item.Fname} {item.Lname}
            {item.City} {item.Addres} {item.MNobar}  
            
            <button onClick={()=>{propas.remove(index)}} className="btn btn-dark m-1">delete</button>
            <button onClick={()=> {propas.add(index)}} className="btn btn-dark m-1">Edit</button> 
 
            
            </div>)
        })}
    </div>
  )
}
