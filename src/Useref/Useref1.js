import React, { useRef,useState } from 'react'

export default function Useref1() {


    console.log('this is a rendar');

    const [stor, setstor] = useState("");
    const data = useRef();

    const display = () => {
       console.log(data.current.value);
    }


    const myhandel = (e) => {
     setstor(e.target.value);
    }

  return (
    <div>
        <input type='text' onChange={myhandel} />
        <input type='text' ref={data}/>
        <input type='button' value='save' onClick={display}/>

    </div>
  )
}
