import React from 'react'
import reactSelect from 'react-select'

 function Memo2(data,index) { 
      
    console.log( "hdf",data) 
  return (
    <div>
      <button onClick={()=>{data.remove(index)}} className="btn btn-dark m-1">delete</button>
    </div>
  )
};

export default React.memo(Memo2)
