import React, { useState } from 'react'

export default function Test() {
    const [word,setword]= useState("");
    const [dispay,setdispay]= useState();

    const magic = word.split('').reverse('').join('')

    const inputchek = (e) => {
      setword(e.target.value)
    }

    const Newupdat = () => {
      magic == word ? setdispay(<h1>magics word</h1>):setdispay(<h1>not msgics</h1>)
      
      if (word == ""){
        setdispay (<h1>Not Found</h1>)
      }
    }

  
   return (
    <>
    <hr></hr>
      <div id='magic'/>
      <div class="d-flex">
         <input class=" me-2 rounded-1 w-100 form-control " type="text" placeholder='please anter value' onChange={inputchek}/>
         <button class='btn-btn-primary' type='button' onClick={Newupdat}>click</button>
      </div>
      <h3>{dispay}</h3>
    </>
  )
}



// aagadathi lank ke pachad thi jo same hot to {AAAA} to mejik word so thavu joye 
// nakr No mejik word 
