import React ,{useState}from 'react'
import TextField from '@mui/material/TextField';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { pink } from '@mui/material/colors';

export default function InquiryForm() {

    const [data, setdata] = useState({
        StudentName:'',
        parentntsName:'',
        BirthDate:"",
        maritalStatus: "",
        gender:"",
        medium:'',
        Education:'',
        State:'',
        collegeschool:'',
        city:'',
        gemail:'',
        mobaliNo:'',
        Addres:'',
       

    }); 

    const hedal = (e) => {
        setdata({...data,[e.target.name]:e.target.value})

    }
    const mysubmit = (e) => {
        e.preventDefault();
        console.log(data)

    }

  return (
    <div>

        <form onSubmit={mysubmit} className="from122">
       <h2 style={{color:'darkgreen'}}>Student details</h2><br/>
        <TextField  label="StudentName" variant="outlined" className='coll-11' name="StudentName" onChange={hedal}/><br/><br/>
        <TextField  label="parentntsName" variant="outlined" className='coll-11' name="parentntsName" onChange={hedal}/><br/><br/>

        <TextField  label="" type='date'variant="outlined" className='coll-11' name="BirthDate" onChange={hedal}/><br/><br/>
      

        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
       <RadioGroup
       row
       aria-labelledby="demo-radio-buttons-group-label"
       defaultValue="female"
       name="radiobuttons-group"
      >
       <FormControlLabel value="female" control={<Radio />} label="Female" />
       <FormControlLabel value="male" control={<Radio />} label="Male" />
       <FormControlLabel value="other" control={<Radio />} label="Other" />
       </RadioGroup>
       </FormControl><br/>

        
        <TextField  label="medium" variant="outlined" className='coll-11' name="medium" onChange={hedal}/><br/><br/>
        
       <TextField select name="city"  label="city" className='coll-11' 
       onChange={hedal} SelectProps={{ native: true,}} >
      <option>Rajkot</option> <option>jetpur</option><option>vadodara</option><option>gondal</option>
        </TextField><br/><br/>
        
 
        <TextField select name="Education"  label="Education" className='coll-11'
        onChange={hedal} SelectProps={{ native: true,}} >
       <option>10 pass</option><option>12 pass</option><option>graduate</option>
       </TextField><br/><br/>

       <TextField select name="State"  label="State" className='coll-11'
        onChange={hedal} SelectProps={{ native: true,}} >
       <option>Gujarat</option><option>rajasthan</option><option>Bihar</option>
       <option>Panaji</option><option>UP</option>
       </TextField><br/><br/> 

       <TextField  label="mobaliNo" variant="outlined" className='coll-11' name="mobaliNo" onChange={hedal}/><br/><br/>

       <TextField  label="Addres" variant="outlined" className='coll-11' name="Addres" onChange={hedal}/><br/><br/>
                                               
        




        

       


      

  
  
  
        <input type='submit' value='Save' className='btn btn-dark'/>
        </form>
    </div>
  )
}
