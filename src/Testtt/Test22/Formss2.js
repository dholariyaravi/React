import axios from 'axios';
import React , {useState} from 'react'
import { toast } from 'react-toastify';

export default function Formss2() {
    
    const [data, setdata] = useState({
        fname:'',
        lname:'',
        city:'',
        id:'',
        
    });

    const hedal = (e) => {
    setdata({...data, [e.target.name] : e.target.value})
    }


    const mysubmit = (p) => {
       p. preventDefault();
       axios.post('http://localhost:4000/accounts/authenticate',data)
       .then(p => {
        console.log(p.data);

        toast('login successefully')
       }).catch(() => {
         toast('filed ')
       })

    }


  return (
    <div>
        <form onSubmit={mysubmit}>

            <label>fname</label>
            <input type='text' name='fname' onChange={hedal}/>

            <label>lname</label>
            <input type='text' name='lname' onChange={hedal}/>

            <label>city</label>
            <input type='text' name='city' onChange={hedal}/>

            <label>id</label>
            <input type='checkbox' name='id' onChange={hedal}/>

            <input type='submit' value='save' />
            

        </form>

    </div>
  )
}
