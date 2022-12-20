import { useContext } from 'react';
import React from 'react'
import Child3 from './Child3' 
import Contex from './Contex';

export default function Child2() {

  const {lan} =  useContext(Contex);

  const mydata ={
    'en' : {
      firstName : "FirstName",
      lastName : "lastName"
    },

    'gnj' : {
      firstName : "પ્રથમ નામ",
      lastName : "છેલ્લું નામ"
    },

    'hd' : {
      firstName : "संतोष",
      lastName : "उपनाम"
    },
  

  } 

  return (
    <div>

      <form>
        
        <label>{mydata[lan].firstName}</label>
        <input type='text'/>

        <label>{mydata[lan].lastName}</label>
        <input type='text'/>

      </form>

      <Child3/>
      </div>
  )
}
