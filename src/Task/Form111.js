import axios from 'axios';
import React,{useState} from 'react'
import { toast } from 'react-toastify';
import Form222 from './Form222';

export default function Form111() {

  const [item, setitem] = useState([]);

  const [index, setindex]= useState(-1);


     const [data, setdata] = useState({
        id:'',
        name:'',
        username:'',
        address:{
            email:'',
            street:'',
            suite:'',
            city:'',
            zipcode:'',
            geo:{
                lat:'',
                lng:'',
            }
        }   
    });

    const hedal = (e) =>{
        setdata({...data, [e.target.name]: e.target.value})
    }

    const delete1 = (index) =>{
        let mydata = [...item];
        mydata.splice(index,1);
        setitem(mydata);
    }

    const mysubmit = (e) => {
        e.preventDefault();

        let mydata = [...item];
            mydata.push(data);
            setitem(mydata);
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then(p => {
            console.log(p)

            toast('data submit')
        });
            
          
    };
     
   

  return (
    <div>
        <form onSubmit={mysubmit} className="from122">

            <label>id</label>
            <input type='text' name='id' onChange={hedal} className='coll-11' />

            <label>name</label>
            <input type='text' name='name' onChange={hedal} className='coll-11' />

            <label>username</label>
            <input type='text' name='username' onChange={hedal} className='coll-11' />

            <label>email</label>
            <input type='text' name='email' onChange={hedal} className='coll-11' />

            <label>street</label>
            <input type='text' name='street' onChange={hedal} className='coll-11' />
            
            <label>suite</label>
            <input type='text' name='suite' onChange={hedal} className='coll-11' />

            <label>city</label>
            <input type='text' name='city' onChange={hedal} className='coll-11' />

            <label>zipcode</label>
            <input type='text' name='zipcode' onChange={hedal} className='coll-11' />

            <input type='submit' value='save' className='btn'/>

        </form>
         <Form222 round={item} remove={delete1} ></Form222>

         
    </div>
  )
}
