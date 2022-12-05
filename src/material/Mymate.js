import React,{useState} from 'react';
import TextField from '@mui/material/TextField';




  export default function Mymate() {

    const [data, setdata] = useState({
        fristName:'',
        Lastname:'',
        Email:'',
        MoNubar:'',
        City:'',
        
    }); 
     
    const hedal = (e) => {
           setdata({...data,[e.target.name]: e.target.value})
    }

    const mysubmit = (e) =>{
         e.preventDefault()
         console.log(data)
    }

    
  return (
    <div>
        <form onSubmit={mysubmit}>
        
         <TextField  label="fristName" variant="outlined" name="fristName" onChange={hedal}/><br/>
         <TextField  label="Lastname" variant="filled" name="Lastname" onChange={hedal} /> <br/>
          <TextField  label="Email" variant="filled" name="Email" onChange={hedal} /> <br/><br/>
        <TextField  label="MoNubar" placeholder="Placeholder" name="MoNubar" multiline onChange={hedal}/> <br/><br/>
  
       <TextField
     
       select
       name="city"

       onChange={hedal} 
       SelectProps={{
        native: true,

       }}
       >
        <option>Rajkot</option>
        <option>jetpur</option>
        <option>vadodara</option>
        <option>gondal</option>
        
        </TextField><br/><br/>
     
        <input type='submit' value='Save' className='btn'/>

        </form>
        
       

          
      
          
    </div>
  )
}

