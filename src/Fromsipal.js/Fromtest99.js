import { Field, Formik, Form, ErrorMessage} from 'formik'
import React from 'react'
import * as yup from 'yup';


export default function Fromtest99() {
 
  let schema = yup.object().shape({
    firstName:yup.string().matches(/^[a-z]+$/, ('Only alphabets are allowed for this field')).required('firstName valid'),
    lastName:yup.string().matches(/^[a-z,A-Z]+$/ , ("Only alphabets are allowed for this field")).required('lastName valid'),
    addres:yup.string().required('addres valid'),
    city:yup.string().required('city valid'),
  })
     
  return (
      
    
     <Formik  validationSchema={schema}

      initialValues={ {
       
      firstName:'',
      lastName:'',
      city:'',
      addres:'',
      gender:'',
      hobbis:[],
      state:'',
      county:'',
     }}
            onSubmit ={ (e) => {
                  console.log(e);
            }}
         >

          <Form class='from122'>

            <label>firstname</label>
            <Field type="text" name="firstName" placeHolder='Enter Your firstname' class="coll-11" /> <br/>
            <ErrorMessage name='firstName'/> <br/>
 
            <label>lastName</label>
            <Field type="text" name="lastName" placeHolder='Enter Your lastName' class="coll-11" /> <br/>
            <ErrorMessage name='lastName'/> <br/>

            <label>addres</label>
            <Field type="text" name="addres" placeHolder='Enter Your addres' class="coll-11" /><br/>
            <ErrorMessage name='addres'/> <br/>

            <label>city</label>
            <Field type="text" name="city" placeHolder='Enter Your city'class="coll-11" /><br/>
            <ErrorMessage name='addres'/>  <br/>

             <Field as="select" name="state" class="coll-11">
              <option value=''>option</option>
              <option value='Gujrat'>Gujrat</option>
               <option value='mp'>mp</option>
               <option value='Rajethan'>Rajethan</option>
               <option value='UP'>UP</option>
              </Field> <br/><br/>

              <Field as="seleCt" name="county" class="coll-11">
              <option value=''>option</option>
              <option value='india'>india</option>
               <option value='UK'>UK</option>
               <option value='Keneda'>Keneda</option>
               <option value='pakistan'>pakistan</option>
              </Field>  <br/>


            <Field type="radio" name="gender" value="male" 
            /> male

            <Field type="radio" name="gender" value="femal"
            /> femal <br/><br/>

            <Field type="checkbox" name="hobbis" value="music" />music
            <Field type="checkbox" name="hobbis" value="crickrt" />crickrt
            <Field type="checkbox" name="hobbis" value="reding" />reding  <br/>
             


            <input type='submit' value='Save'/>

          </Form>


     </Formik>
  )
}
