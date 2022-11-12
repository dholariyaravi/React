import React, { useState } from 'react'

export default function Fullname() {
    const [frist,setfrist]= useState('Ravi ');
    const [midal, setmiadl] = useState ('Harsukhbhai');
    const [last,setlast]= useState('Dholariya');
    const [fullname,setfullname]= useState('');

   const event = () => {
    setfullname (`${frist[0]} ${midal[0]} ${last}`)
   }

  return (
    <>
    <hr/>
    <h1>my Name :- {fullname}</h1>
    <button onClick={event}>button</button>
    </>
  );
}

// function na evenpar 4 state use kar vana and 
//   firstname
//   lastname
//   midname
//   Fullname
//   last fullname ni anadar value stor kara vani... 
  
//   f .lastname puru joye . m 
//   button na click par ..
