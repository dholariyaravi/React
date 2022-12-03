import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify';

export default function Form11() {


  return (
    <div>
        <Formik initialValues={{
            email:"",
            password:" ",
        }}

        onSubmit = {(e) => {
            
            axios.post('http://localhost:4000/accounts/authenticate',e)
            .then(n => { console.log(n)

                toast('login Successfully')
            }).catch( (p) => {
                toast('lerror is ')
            }); 
           
        }}
        >
            <Form className='from122'>

                <label>Login</label>
                <Field type='text' name="email" className="coll-11"/> 

                <label>password</label>
                <Field type='password' name="password" className="coll-11" />   <br/><br/>

                <Field type='submit' value='Save' className="coll-11 btn" />
                
            </Form>


        </Formik>
    </div>
  )
}
