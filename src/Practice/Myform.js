import React, { useState } from 'react'

export default function Myform() {

    const [employ,setemploy]= useState({

        firstname:' ',
        lastname:' ',
        city:' ',
        hobbies: [ ],
        gender: " "    
    })
 
    const myhandler = (e) => {
          
        if (e.target.name == 'hobbies') {
            let Mydata = employ.hobbies;

            if(e.target.checked){

                Mydata.push(e.target.value);
               setemploy({...employ, 'hobbies':Mydata });
              

            } else{
                let S = Mydata.filter( (x) => {
                    return x !=  e.target.value
                })
                setemploy ({ ...employ , hobbies: S })
              };  
        } 
        
       else{
            setemploy ({ ...employ, [e.target.name] : e.target.value }) ;
        }

    }

   const mySubmit = (e) => {
        e.preventDefault();
        console.log(employ);
   }

  return (
    <div>
        <form onSubmit={mySubmit}>
                
                <input type="text"  name="firstname" onChange={myhandler}/> <br/>
                <input type="text"  name='lastname' onChange={myhandler}/> <br/>
                <input type="text" name='city' onChange={myhandler}/> <br/>
                   

                <label>male</label>
                <input type='radio' name='gender' value='male' onClick={myhandler} />
                <label>female</label> 
                <input type='radio' name='gender'  value='female' onClick={myhandler} /> 
                 <br/>

                <label>music</label>
                <input type='checkbox' name='hobbies' value='music' onClick={myhandler}/>
                <label>cricket</label>
                 <input type='checkbox' name='hobbies' value='cricket' onClick={myhandler}/> <br/>

                <input type="submit" value="save"/>
        </form>
    </div>
  );
}


// =======================================================================  

