import React from 'react';


 function Propas123(data) {
  return (
    
    <div className="col-sm-3">

      <div class="card" style={{width: "310px", display: 'flex'}}>
      <p class="id">{data.recod.id}</p>
    <img class="card-img-top" src={data.recod.image} alt="Card image cap"/> 
    <h4 class="price">{data.recod.price}</h4>
    {/* <h5 class="card-title">{data.recod.title}</h5> */}
    <div class="card-body">
    <h5 class="card-title">{data.recod.title}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

   </div>

</div>

   
  )
}

export default Propas123;
