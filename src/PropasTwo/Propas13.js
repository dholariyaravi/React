import React from 'react'

export default function Propas13(data1) {
  return (
   
    <div className='col-4'>
    <div class="card" style={{width: "310px"}}>

         <h4 class="price">{data1.recod.albumId}</h4>
           <p class="id">{data1.recod.id}</p>
              <img class="card-img-top" src={data1.recod.url} alt="Card image cap"/>  
         <div class="card-body">
           <h5 class="card-title">{data1.recod.title}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>
    </div>


  )
}
