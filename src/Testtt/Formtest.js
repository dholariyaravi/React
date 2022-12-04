import axios from 'axios';
import React ,{useState} from 'react'
import { toast } from 'react-toastify';

export default function Formtest() {
    const [data, setdata] = useState({
        userId:'',
        id:" ",
        title:" ",
        body:" ",
    });

     const hedal = (e) =>{
          setdata({...data, [e.target.name]: e.target.value})
     }

    const mysubmit = (p) =>{
        p.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then(p => {
            console.log(p.data)
            toast('true')
        }).catch( ()=> {
             toast('false')
        })
    }


  return (
    <div>
        
         <form onSubmit={mysubmit} className="from122">
        
       <label>userId</label>
       <input type='text' name='userId' onChange={hedal} className="coll-11"/>
   
       <label>title</label>
       <input type='text' name='title' onChange={hedal} className="coll-11"/>
       
       <label>id</label>
       <input type='text' name='id' onChange={hedal} className="coll-11"/>
       
       <label>body</label>
       <input type='text' name='body' onChange={hedal} className="coll-11"/> <br/><br/>

       <input type='submit' value='save'className='btn ' />

         </form>
    </div>
  )
}
