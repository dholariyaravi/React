import { Formik,Field ,Form } from 'formik'
import React from 'react';



export default function Fromfim2() {

  return (
    <div>

        <Formik initialValues={{
             carnumber:'',
             carmodal:'',
             carmake:'',
             Engintype:[ ],
             fualtype:'',
        }}

          onSubmit = { (val) => {
           console.log(val)
       }}
        >

       <Form>

        <label>carnumber</label>
        <Field type='text' name="carnumber" /> <br/><br/>

      <label>Carmodal</label>
         <Field as="select" name="carmodal">
            <option value="Audo">Audo</option>
            <option value="BMW">BMW</option>
            <option value="thar">thar</option>
            <option value="KIv">KIv</option>
         </Field> <br/><br/>
         
        <label>carmake</label>
         <Field as="select" name="carmake">
            <option  value="toyota" >sndsh</option>
            <option value="toyota" >toyota</option>
            <option value="toyota" >toyota</option>
            <option value="Ford" >Ford</option>
         </Field> <br/> <br/>


        <Field type='checkbox' name="Engintype"  value="Engintype"/> 
        Engintype
        <Field type='checkbox' name="Engintype"  value="issue" /> 
        issue<br/> <br/>  


          <Field type="radio" name="fualtype" value="fualtype" />
          fualtype
          <Field type="radio" name="fualtype" value="Electric" />
          Electric 
          <Field type="radio" name="fualtype" value="Disel"/>
          Disel <br/><br/>

          <input type='submit' value='Save'/>


    

        </Form>
        
        </Formik>
    </div>
  )
}
