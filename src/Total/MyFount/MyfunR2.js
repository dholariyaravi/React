import React from 'react';
import { connect } from 'react-redux'

 const mapStateToProps = (state) => {
     return{
           count : state.counter1,
     }
 }
 
 const mapDispatchToProps = (dispatch) => {
 
     return{
        increment : () => dispatch({type: 'Increment'}),
     }
     
 }


function MyfunR2 ({count,increment}) {

    return (
        <div>
            {count}
        <button onClick={ () => {increment()}}>icrement</button>   
        </div>
    );
}

export default  connect (mapStateToProps,mapDispatchToProps) (MyfunR2);
