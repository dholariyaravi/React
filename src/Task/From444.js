import React, { useState } from 'react';
// import "./Fromcss.css";



export default function From444() {

   
     const [data,setdata]= useState({
        fristname:'',
        lastname:'',
        Email:'',
        password:'',
        country:'',
        city:'',
        addres:'',
        birthday:'',
        checkbox2:'',
        checkbox1:''
    
     })

     const Hendar =(e) => {

         if(e.target.type == 'checkbox'){
            setdata({...data, [e.target.name]:e.target.checked});
         }
         else
         {

        setdata({...data, [e.target.name]:e.target.value});
         }
     }


     const Chenj = (e) => {
        e.preventDefault();
        console.log(data);
     }

  return (
    <div>
        <form onSubmit={Chenj}>
           
            <label>fristname</label>
            <input type='text' name='fristname' onChange={Hendar}/><br/><br/>
            <label>lastname</label>
            <input type='text' name='lastname' onChange={Hendar}/><br/><br/>
            <label>Email</label>
            <input type='text' name='Email' onChange={Hendar}/><br/><br/>
            <label>password</label>
            <input type='text' name='password' onChange={Hendar}/><br/><br/>
            <label>country</label>
            <input type='text' name='country' onChange={Hendar}/><br/><br/>
            <label>city</label>
            <input type='text' name='city' onChange={Hendar}/><br/><br/>
            <label>addres</label>
            <input type='text' name='addres' onChange={Hendar}/><br/><br/>

            <form action="/action_page.php">
            <label for="birthday">Birthday:</label>
            <input type="date" id="birthday" onChange={Hendar} name="birthday"/>
            </form> <br/>
           
        
            <input type='checkbox' name="checkbox2"  onChange={Hendar} />
            <label> Lorem a. A female person whosunites with a sperm or a </label><br/>

            <input type='checkbox' name="checkbox1"  onChange={Hendar}/>
                 <label>Lorem a. A femalem or a male personwhose sperm  egg,</label> <br/> <br/>

           
            <button class='btn btn-dark' type='submit'>click</button>

        </form>
    </div>
  )
}
