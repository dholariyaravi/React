import { Global } from '@emotion/react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { AgGridReact } from 'ag-grid-react';

import axios from 'axios'
import { Field, Formik,Form } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import autho1 from './Custon';
// import autho1 from './interceptors  ';



export default function Loginsw2() {

  const mynav = useNavigate();

  const [column,setcolumn] = useState ([
    {field:"title",filter: true},
    {field:"firstName",filter: true},
    {field:"lastName",filter: true},
    {field:"email",filter: true},
    {field:"password",filter: true},
    {field:"confirmPassword",filter: true},
    {field:"acceptTerms",filter: true}
  ]);
  const [row,setrow] = useState ([]);

   const output1 = () => {
       autho1.get('accounts').then(y=>{
        setrow(y.data)
       }).catch(y=>{
        console.log(y)
       });
       
   }
   

  return (
    <div>
        <Formik initialValues={{
              email:"",
              password:"",
        }} 
               
         
          onSubmit= { (e) => {
            console.log(e)
            
            axios.post('http://localhost:4000/accounts/authenticate',e)
            .then(p => {
                console.log(p) 
                localStorage.setItem("user1",JSON.stringify(p.data)); 

                mynav ('/Formsw1');

            toast('login Successfully')
            }).catch(
                p => {
                   toast('falid')
                   console.log(p)
             }); 
             
          }}
          >

            <Form className='from122'> 

                <label>email</label>
                <Field type='text' name='email'className="coll-11" />

                <label>password</label>
                <Field type='text' name='password'className="coll-11" /> <br/><br/>

                <input type='submit' value='Save' className='btn'/> 

             </Form>
             
        </Formik> <br/>
        <Link className='btn' to={'/register'}>Register</Link>

        {/* <button type='submit' onClick={output1} className="btn">fetch</button> <br/> */}

        {/* <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
        <AgGridReact rowData={row} columnDefs={column} ></AgGridReact>
        </div>
         */}
    </div>
  );
};
