import React,{useState} from 'react';
import TextField from '@mui/material/TextField';

export default function LForm99() {
    const [data, setdata] = useState([{

        Name:'',
        Egucation:"",
        colifecation:"",
       
    }]);

    const mychenj = (e) => {
        setdata({...data , [e.target.name]: e.target.value});
    }

    const addcopy = (e) => {
        let myadd = {
            Name:'',
            Egucation:"",
            colifecation:"",
        };
        setdata([...data, myadd]);

    }

    const mysubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

  return (
    <div>
       
        <form onSubmit={mysubmit} className="from122">
            {data.map((val,index) => {
                return(
                   
            <div key={index}>
                            
            <TextField  label="Name" variant="outlined" value={val.Name} className='coll-11' name="Name" onChange={mychenj}/><br/><br/>
        

            <TextField select name="Egucation"  value={val.Egucation} className='coll-11'  label="Egucation" onChange={mychenj} SelectProps={{native: true,}}>
            <option>Egucation</option><option>10 Pass</option> <option>12 pass</option><option>greguaet</option><option>No</option>
            </TextField><br/><br/>



            <TextField select name="colifecation"  value={val.colifecation} className='coll-11'  label="colifecation" onChange={mychenj} SelectProps={{native: true,}}>
            <option>B.com</option><option>BA</option> <option>BCA</option><option>Arts</option><option>No</option>
            </TextField><br/><br/>

         
            <input type='submit' value='Save' className='btn btn-dark'/>
            <input type='button' value='add'onClick={addcopy}  className='btn btn-dark'/>

              </div>
                )
            })}
      </form>
    </div>
  )
}
