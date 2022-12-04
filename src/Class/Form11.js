import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'; 

export default function Form11() {


  return (
    <div>
        <Formik initialValues={{
            email:"",
            password:" "
        }}

        onSubmit = {(e) => {
           console.log(e);
            
            axios.post('http://localhost:4000/accounts/authenticate',e)
            .then(n => { 
                console.log(n)

                toast('login Successfully')
            }).catch( 
                n => {
                toast(' faled ')
                console.log(n);
            }); 
           
        }}
        >
            <Form className='from122'>

                <label>Login</label>
                <Field type='text' name="email" id="email"className="coll-11"/> 

                <label>password</label>
                <Field type='text' name="password" id="password"className="coll-11" />   <br/><br/>

                <input type='submit'value='save'/>
                
            </Form>


        </Formik>
    </div>
  )
}
