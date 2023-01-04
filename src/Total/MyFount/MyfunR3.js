import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return{
        count1 : state.counter1,
    }
  }

const increment = () =>{
    return{
        type: 'Increment'
    }
    
    
}


 function MyfunR3(data) {

  return (
    <div>
        {data.count1}
        <button onClick={ () =>{data.increment()}}>increment</button>
    </div>
  )
}

export default connect(mapStateToProps,{increment}) (MyfunR3)
