import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';
import * as yup from "yup";

export default function Formik1() {
    let schem = yup.object().shape({
        email: yup.string().required('emailnot valid'),
        password : yup.string().required('password not valid')
    })

   
  return (
    <div>
        <Formik  validationSchema={schem}

        initialValues={{
             email:'',
             password:'',
        }}
        onSubmit= {(e) => {

            axios.post('http://localhost:4000/accounts/authenticate',e)
            .then(p => {
                console.log(p);

                toast('login successefully')
            }).catch( (p) =>{
                toast('loginfild')
            });
          
        }}
        
        >
            <Form>
  
                <label>email</label>
                <Field  type="text" name="email" />
                <ErrorMessage name='email' />

                <label>password</label>
                <Field  type="password" name="password" />
                <ErrorMessage name='password' />

                <input type='submit' value='save'/>

            </Form>

        </Formik>
    </div>
  )
}
