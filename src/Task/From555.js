import React  from 'react'
import { Formik, Field, Form } from 'formik';


export default function From555() {

   return( <Formik initialValues = {
        {
            firstname: '' ,
            lastname: '',
            city:'',

        }
    }
      
    onSubmit= { (val) => {
        console.log(val)
    }}
    >
     

        <Form>
            <label>firstname</label>
            <Field type="text" name="firstname" id="firstname"/>

            <label>lastname</label>
            <Field type="text" name="lastname" id="lastname"/>

            <label>city</label>
            <Field type="text" name="city" id="city"/>

            <input type='submit' value='Save'/>

        </Form>



  </Formik>
   )
}
