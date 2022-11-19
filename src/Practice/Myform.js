import React, { useState } from 'react'

export default function Myform() {

    const [employ,setemploy]= useState({

        firstname:' ',
        lastname:' ',
        city:' ',
        hobbies: [ ],
        gender: " "    
    })

    const [validesaton,setvalidesaton] = useState({
        firstname:' ',
        lastname:' ',
        city:' ',
        hobbies: " ",
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

         if(e.target.value == "") {
            setvalidesaton ({ ...validesaton, [e.target.name]: `${e.target.name} is reqauad `})
         }
         else{
            setvalidesaton({...validesaton,[e.target.name]: " "})
         }
         
        // ===== jayre  number na textbox ma na use kar va hoy yare aa conditon lage...onli for a-z,A-Z aave ..
         
          if(/^[A-Za-z]+ $/ .test (e.target.value) == false && e.target.name == 'firstname'){
           
              setvalidesaton ({... validesaton ,firstname: "firstname is inavalid"})
         }

        
            setemploy ({ ...employ, [e.target.name] : e.target.value }) ;
        };

    }

   const mySubmit = (e) => {
        e.preventDefault();
        console.log(employ);
   }

  return (
    <div>
        <form onSubmit={mySubmit}>
                
                <input type="text"  name="firstname" onChange={myhandler}/> <br/>
                <span>{validesaton.firstname}</span>  
                <input type="text"  name='lastname' onChange={myhandler}/> <br/>
                <span>{validesaton.lastname}</span>  
                <input type="text" name='city' onChange={myhandler}/> <br/>
                <span>{validesaton.city}</span>
                   

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

