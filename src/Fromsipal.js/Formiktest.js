import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup';
import "./Fromsi1.css";

export default function Formiktest() { 

    let schema = yup.object().shape({
        firstname:yup.string().matches(/^[A-z]+$/, "Only alphabets are allowed for this field").max (25).required('*Firstname is required'),
        lastname:yup.string() .matches(/^[A-z]+$/, "Only alphabets are allowed for this field").max (25).required('*lastname is required'),
        email:yup.string().required('*email is required '),
        address:yup.string().required('*address is required '), 
        zipcode:yup.string().matches(/^[0-9]+$/, 'Only numbres are allowed for this field').max(6).min(6).required('*zipcode is required '),
        mobile:yup.string() .matches(/^[0-9]+$/, "NUBAR IS NOT required").min(9).max(9).required('*mobile is required '), 

        password: yup.string().matches(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})",
          "Must Contain 5 Characters, One Alphabet, One Number and one special case Character"
      ).min(5).max(16).required('*Password is required '),
      confirmpassword: yup.string()
      .required().oneOf([yup.ref("password"), null], "Passwords must match"),

      city:yup.string().required('*city is required '), 
      state:yup.string().required('*state is required '), 
      country:yup.string().required('*country is required '), 

        });
    
  return (

      <Formik  validationSchema={schema}
      
      initialValues={{
        firstname:'',
        lastname:'',
        email:'',
        address: '',
        zipcode: "",
        mobile: '',
        password: '',
        confirmpassword: '',
        city: '',
        state: '',
        country: ''
        
        
      }}
      onSubmit= {(val) => {
        console.log(val)
      }}
      >
        <Form class='from122'>
            <label>firstname</label>
            <Field type="text" name="firstname" class="coll-11"/><br/>
            <ErrorMessage
            name="firstname"
            component="div"
            className='text-dander'
            />

            <label>lastname</label>
            <Field type="text" name="lastname" class="coll-11"/> <br/>
            <ErrorMessage
            name="lastname"
            component="div"
            className='text-dander'
            /> 


            <label>email</label>
            <Field type="text" name="email" placeHolder='Enter Your email' class="coll-11"/> <br/>
            <ErrorMessage name="email"/>  

            <label>address</label>
            <Field type="trxt" name="address" placeHolder="Enter Your address" class="coll-11" />
            <ErrorMessage name='address'/> <br/>

            <label>zipcode</label>
            <Field type="trxt" name="zipcode" placeHolder="Enter Your zipcode" class="coll-11" />
            <ErrorMessage name='zipcode'/> <br/>

            <label>mobile</label>
            <Field type="trxt" name="mobile" placeHolder="Enter Your mobile" class="coll-11" />
            <ErrorMessage name='mobile'/><br/>

            <label>password</label>
            <Field type="trxt" name="password" placeHolder="Enter Your password" class="coll-11" />
            <ErrorMessage name='password'/><br/>

            <label>confirmpassword</label>
            <Field type="trxt" name="confirmpassword" placeHolder="Enter Your confirmpassword"class="coll-11" />
            <ErrorMessage name='confirmpassword'/><br/><br/>

            <Field as="select" name="city" class="coll-11">
            <option value='option'>option</option>
              <option value='vadodara'>vadodara</option>
              <option value='surat'>surat</option>
              <option value='rajkot'>rajkot</option>
              <option value='mumbai'>mumbai</option>
              <option value='Ahmedabad'>Ahmedabad</option>
              <option value='gondal'>gondal</option>
            </Field> 
            <ErrorMessage name='city'/> <br/>

            <Field as="select" name="state" class="coll-11">
            <option value='option'>option</option>
            <option value='Gujarat'>Gujarat</option>
            <option value='Rajasthan'>Rajasthan</option>
              <option value='Rajasthan'>Rajasthan</option>
              <option value='mp'>mp</option>
              <option value='Punjab'>Punjab</option>
              <option value='up'>up</option>
              <option value='Delhi'>Delhi</option>
            </Field>
            <ErrorMessage name='state'/> <br/>

            <Field as="select" name="country" class="coll-11"> 
            <option value='option'>option</option>
            <option value="red">india</option>
            <option value="blue">Nepal</option>
            <option value="dark">USA</option>
            <option value="dark">UK</option>
            <option value="dark">USE</option>
            </Field> 
            <ErrorMessage name='country'/> <br/><br/> <br/>


            <input type="submit" value="Save" className='btn btn-dark'/> <br/>


        </Form>

      </Formik>
  )
}
