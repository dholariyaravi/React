import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Formsw1() {
  return (
    <div>
        <Formik initialValues={{
              title : "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              acceptTerms: true
        }}
         
         onSubmit= { (e) => {
            console.log(e)

            axios.post('http://localhost:4000/accounts/register',e)
            .then(p => {
                console.log(p)
                toast('login Successfully')
            }).catch(
                p => {
                   toast('faled')
                   console.log(p)
             });
         }} >
          
            <Form className='from122'>
                <label>title</label>
                <Field type='text'name="title" className="coll-11"/>

                <label>firstName</label>
                <Field type='text'name="firstName" className="coll-11"/>

                <label>lastName</label>
                <Field type='text'name="lastName" className="coll-11"/>

                <label>email</label>
                <Field type='text'name="email" className="coll-11"/>

                <label>password</label>
                <Field type='text'name="password" className="coll-11"/>

                <label>confirmPassword</label>
                <Field type='text'name="confirmPassword" className="coll-11"/>

                <label>acceptTerms</label>
                <Field type='text'name="acceptTerms" className="coll-11"/><br/><br/>

                <input type='submit' value='Save' className='btn'/>
            </Form>

        </Formik><br/>
        
        <Link className='btn' to={'/'}>Login</Link>
    </div>
  )
}
