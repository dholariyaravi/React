import { Formik ,Field, Form, ErrorMessage} from 'formik'
import React from 'react';
import"./Fromsi1.css";


export default function Fromsi1() {
 


  return (
    <div>
       

        <Formik 

         initialValues={{
            firstName:'',
            LastName:'',
            city:'',
            addres:'',
            state:'',
            country:'',
            colification:'',
   
        }   
    } 
      onSubmit ={ (val) => {

           console.log(val)
      }}
      >
        
            <Form class='from122'> 
         <label>firstName</label>
         <Field type="text" name="firstName" /> <br/> <br/>
        

         <label>LastName</label>
         <Field type="text" name="LastName" /><br/> <br/>

        
         <label>addres</label>
         <Field type="text" name="addres" /><br/> <br/>

         <label>state</label>
         <Field type="text" name="state" /><br/> <br/>

         <label>country</label>
         <Field type="text" name="country" /><br/> <br/>

         <label>city</label>
         <Field type="text" name="city" /><br/> <br/>

         <label>colification</label>
         <Field type="text" name="colification" /><br/> <br/>

         <input class="btn btn-denger" type='submit' value='save'/>


    
         </Form>
        </Formik>
        
    </div>
  )
}
