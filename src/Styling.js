import React from 'react';
import './Demo.css';


// css modual... 


// css StyleSheet... 
const Demo =() => {
    const Stylee = {
         color : 'white',
         padding :'30px',
         backgroundColor :'DodgerBlue',
         fontFamily: "Sans-Serif" 
        
    };
    return(
      <>
    
        <h1 style={Stylee}>hello javascript</h1>
          <h2 className='Deje'>hello style</h2>
        </>
    );
}

// Inline style... 
export default function Styling() {
  return (
    <div>
        <h1 style={{backgroundColor:'darkblue'}}>Hello React</h1>
        <Demo />
    </div>
  )
}
