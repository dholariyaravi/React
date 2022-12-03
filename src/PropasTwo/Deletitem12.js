import React from 'react'

export default function Deletitem12(props) {
  return (
    <div>
        {props.myround.map( (item,index)=> {
        return(
        <div>{item.fname} {item.Lname} {item.City} 
        {item.Cnuber} {item.email} {item.Addres}
         <button onClick={ ()=> {props.remove(index)}}><b className='btn btn-dark'>x</b></button>
         <button onClick={ ()=> {props.add(index)}}>add</button>
        
        </div>)
        })}
    </div>
  )
}
