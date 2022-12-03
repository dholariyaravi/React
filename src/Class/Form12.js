import axios from 'axios';
import React , {useState}  from 'react'

export default function Fomr12() {

   const [data, setdata] = useState({

    title : "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true
     });

     const onhedal = (e) => {
        setdata({...data, [e.target.name] : e.target.value});  
     };

     const mysubmi = (e) => {
      e.preventDefault();
      axios.post('http://localhost:4000/accounts/register',data)
      .then(n=>{
       console.log(n.data);
      });
   }


  return (
    <div>
        <form onSubmit={mysubmi}>

            <label>title</label>
            <input type='text' name='title'onChange={onhedal}/>

            <label>fristname</label>
            <input type='text' name='firstName'onChange={onhedal}/>

            <label>lastName</label>
            <input type='text' name='lastName'onChange={onhedal}/>

            <label>email</label>
            <input type='text' name='email'onChange={onhedal}/>

            <label>password</label>
            <input type='text' name='password'onChange={onhedal}/>

            <label>confirmPassword</label>
            <input type='text' name='confirmPassword'onChange={onhedal}/>

            <input type='submit' value='save'/>

        </form>
    </div>
  )
}
