import React, { useState } from 'react'
import Select from 'react-select';


export default function From222() {

    const [data,setdata]= useState({
        
        fristname:"",
        Degree:'',
        collegs:'',
    })

    const Degreedata = [
        {value:'B.com ' ,label :"B.com"},
        {value:'Aras ' ,label :"aras"},
        {value:'BAC ' ,label :"BAC"},
        {value:'B.com ' ,label :"B.com"}
    ];

    const collegsdata = [
        {value:'msu' ,label :"msu"},
        {value:'kirshna' ,label :"kirshna"},
        {value:'parul ' ,label :"parul"},
        {value:'kathiyawad' ,label :"kathiyawad"}
        
    ];

    const handal = (e) => {
        console.log(e)
        setdata({...data , [e.target.name] : e.target.value})
    }

    const handalsubmit = (e) => { 
        e.preventDefault();
        console.log(data);
    }



  return (
    <div>
        <form onSubmit={handalsubmit}>
            <label>Name</label><br/>
            <input type="text" name='fristname' onChange={handal}/> 
          

            <Select
            onChange={ (e) => {
                handal({target: {name:'Degree', value:e.value}}) }}
            name='Degree'
            options={Degreedata}
            />

           <Select
            onChange={ (e) => {
                handal({target: {name:'collegs', value:e.value}}) }}
            name='collegs'
            options={collegsdata}
            /> <br/>

            <input class='btn btn-dark' type='submit' value='Save'/>

        </form>
    </div>
  )
}

// ====================================================================== 


    