import React, { useState } from 'react'

export default function From123() {

  const [from,setfrom] = useState({
    fristname:'',
    lastname:'',
    city:'',
    addres:'',
    hobbis: [ ],
    gender:''
  
  })
  
  const Headr = (e) => {

    if(e.target.name == 'hobbis'){
        let Mydata = from.hobbis;

        if(e.target.checked){
            Mydata.push( (e.target.value));
            setfrom({ ...from, 'hobbis':Mydata});

        } else{
            let v = Mydata.filter( (e) => {
                return e != e.target.value 
            })
             setfrom({ ...from, hobbis: v })
        };

    } else{
        setfrom({ ...from, [e.target.name]: e.target.value});
    }
 
  }

  const Chenj = (p) => {
     p.preventDefault();
     console.log(from)
  } 

  return (
    <div>
        <from onSubmit={Chenj} >
        <input type='text'name='fristname' onChange={Headr} />
        <input type='text'name='lastname' onChange={Headr} />
        <input type='text'name='city' onChange={Headr} />
        <input type='text'name='addres' onChange={Headr} /> <br/>
        
       

        <label>male</label>
        <input type='radio' name='gender' value='male' onChange={Headr} />
        <label>female</label>
        <input type='radio' name='gender' value='female' onChange={Headr} /> 

       <label>music</label>
       <input type='checkbox' name='hobbis' value='musice' onChange={Headr} />  
       <label>cricket</label>
       <input type='checkbox' name='hobbis' value='cricket' onChange={Headr} />

      
        <br/>
        <button type='submit' onClick={Chenj}>click me</button>

     </from>
    </div>
  )
}
