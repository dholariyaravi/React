import React from 'react'

export default function Form222(pro) {
  return (
    <div>
        {pro.round.map((data,index) => {
            return(
                <div>{data.id} {data.name} {data.username} 
                {data.email} {data.street} {data.suite} 
                {data.city} {data.zipcode} {data.lat} {data.lng} 

                <button onClick={ ()=> {pro.remove(index)}}><b className='btn btn-dark'>x</b></button>
                
                </div>
            )
        })}
    </div>
  )
}
