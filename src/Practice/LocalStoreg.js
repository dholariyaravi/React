import React, { useState } from 'react';

export default function LocalStoreg() {


    const[name,setname]  = useState('');
    const[email,setemail]=useState('');
    const[pawd,setpawd]  =useState('');

    const handle = () => {
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('password',pawd)
    }

    const Heacr = (e) =>{
     setname(e.target.value)
    }


  return (
    <div className='from'><br/>

        <input type='name' placeholder='enter your name' onChange={Heacr}/> <br/><br/>

        <input type='email' placeholder='enter your email' onChange={(e) => setemail(e.target.value)}/> <br/> <br/>

        <input type='password' placeholder='enter your password' onChange={(e) => setpawd(e.target.value)}/> <br/> <br/>

        <button class='btn btn-dark' onClick={handle}>click me</button>

        {/* <div>
            <div>{localStorage.getItem('name')}</div>
            <div>{localStorage.getItem('email')}</div>
            <div>{localStorage.getItem('password')}</div>
        </div> */}



    </div>
  )
}
