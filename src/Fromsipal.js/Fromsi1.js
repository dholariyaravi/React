import { Formik ,Field, Form, ErrorMessage} from 'formik'
import React from 'react';



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
         <Field type="text" name="firstName" class="coll-11"/> <br/> <br/>
        

         <label>LastName</label>
         <Field type="text" name="LastName" class="coll-11" /><br/> <br/>

        
         <label>addres</label>
         <Field type="text" name="addres" class="coll-11" /><br/> <br/>

         <label>state</label>
         <Field type="text" name="state"class="coll-11" /><br/> <br/>

         <label>country</label>
         <Field type="text" name="country"class="coll-11" /><br/> <br/>

         <label>city</label>
         <Field type="text" name="city" class="coll-11"/><br/> <br/>

         <label>colification</label>
         <Field type="text" name="colification"class="coll-11" /><br/> <br/>

         <input class="btn btn-denger" type='submit' value='save' />


    
         </Form>
        </Formik>
        
    </div>
  )
}
