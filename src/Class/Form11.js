import { height } from '@mui/system';
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'; 

export default function Form11() {

    const dispaydata1 = () => {
        let data = localStorage.getItem('user')
        let p = JSON.parse(data)

        axios.get('http://localhost:4000/accounts',{
            headers : {
                "Authorization" : "Bearer " + p?.jwtToken
             }
        }).then(y=> {
            console.log(y.data)
        }).catch(y=>{
            console.log(y)
        });     
    }

  return (
    <div>
        <Formik initialValues={{
            email:"",
            password:""
        }}

        onSubmit = {(e) => {
           console.log(e);
            
            axios.post('http://localhost:4000/accounts/authenticate',e)
            .then(n => { 
                console.log(n)
                localStorage.setItem('user',JSON.stringify(n.data));
                toast('login Successfully')
            }).catch( 
                n => {
                toast('faled')
                console.log(n);
            }); 

          
        }}
        >
            <Form className='from122'>

                <label>email</label>
                <Field type='text' name="email" id="email"className="coll-11"/> 

                <label>password</label>
                <Field type='text' name="password" id="password"className="coll-11" />   <br/><br/>

                <input type='submit'value='save'/>
                
            </Form>
        </Formik>
        <button onClick={dispaydata1}>Fetch</button>
    </div>
  )
}
