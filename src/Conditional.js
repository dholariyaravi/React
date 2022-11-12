import React from 'react'

//   function Garages (props){
//     const Cars = props.Cars;
//     return(
//         <>
//         <h1>GARAGES</h1>
//          {Cars.length > 0 &&
//           <h2>My {Cars.length} New Garage Is </h2>  
//         }
//         </>
//     );
//  }
//   const Cars = ['Ford', 'BMW', 'Audi','KIV'];

// ========================================//////////////////// 

 function Missgold(){
    return <h1>RAVI</h1>
   
 }
 function Madgold(){
   return <h1>DHOLARIYA</h1>
}

 export default function Goal (props) {
    const isGame = props.isGame;
   
    // return <Garages Cars={Cars}/>

    return (
        <>
        {isGame ? <Madgold/> : <Missgold/>}
        </>
    );

    // if (isGame){
    //  return <Missgold/>
    // };
    //  return <Madgold/>
        
}