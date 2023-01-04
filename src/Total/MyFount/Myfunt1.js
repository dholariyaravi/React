import React from 'react';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {

    return{
        count : state.counter1,
    }
    

}

function Myfunt1 ({count,dispatch}) {

   
    const increment11 = () => {

        dispatch ({type: 'Increment'});
     }


    return (
        <div>
            {count}
            <button onClick={increment11}>increment</button>
            
        </div>
    );
}

export default connect(mapStateToProps)(Myfunt1);
