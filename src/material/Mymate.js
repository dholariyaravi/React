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
        
         <TextField  label="fristName" variant="outlined" className='coll-11' name="fristName" onChange={hedal}/><br/><br/>
         <TextField  label="Lastname" variant="filled" className='coll-11' name="Lastname" onChange={hedal} /> <br/><br/>
          <TextField  label="Email" variant="filled" className='coll-11' name="Email" onChange={hedal} /> <br/><br/>
        <TextField  label="MoNubar" placeholder="Placeholder" className='coll-11' name="MoNubar" multiline onChange={hedal}/> <br/><br/>
  
       <TextField
     
       select
       name="city"
       label="city"
       
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
     
        <input type='submit' value='Save' className='btn btn-dark'/>

        </form>
        
       

          
      
          
    </div>
  )
}

