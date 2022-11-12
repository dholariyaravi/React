import { useState } from "react";

  function Fcolor() {
  const [color ,setcolor] = useState('black');

     return(
        <>
          <h2>my favorite color is {color}</h2>
          <button type="button" onClick={ () => setcolor('red')}>Add</button>
          <button type="button" onClick={ () => setcolor('blue')}>color</button>
          <button type="button" onClick={ () => setcolor('dark')}>add</button>
          <button type="button" onClick={ () => setcolor('pink')}>button</button>

        </>
     )
  };
 //   ========== ++++++++

  function Set (){
    const [col , setcol] = useState({
        modal: 'mustate',
        year : '2023',
        brand : 'ford',
        colors : 'red' 
    });

    const Update =() => {
        setcol (prev => {
            return {...prev, colors:'blue'};
        })
    };
    
    return (
        <>
           <h1>my {col.brand}</h1>
           <p>my color is {col.colors} and {col.modal} year {col.year}</p>
           <button type="button" onClick={Update}>button</button>
        </>
    );
 };

 // ==============-------------------


 export default function UState () {
    const [color,setcolor]= useState('red');

    return <>
     <h1>my first pogram in {color} useState</h1>
     <button type="button" onClick={ () => setcolor('blue')}>add</button>
     <Set/>
     <Fcolor/>
    </>
   
 };