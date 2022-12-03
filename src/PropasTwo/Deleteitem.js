import React, { useState } from 'react'
import Deletitem12 from './Deletitem12';

export default function Deleteitem() {

     const [data, setdata] = useState([]);

     const [item,setitem]= useState({
        fname:" ",
        Lname:" ",
        City:" ",
        Cnuber:" ",
        email:" ",
        Addres:" ",
     });
     const Mydelete = (index) => {
      let mydata = [...data];
      mydata.splice(index,1);
      setdata(mydata);
   };

    const addvalue = (index) => {
      
    let mydata = data[index];
    setitem(mydata) ;
   }

     const hendal = (e) => {
        setitem({...item, [e.target.name]: e.target.value});
     };

     const mySubmit = (e) => {
        e.preventDefault();

        let mydata = [...data]
        mydata.push(item);
        setdata(mydata);
     };

    
  return (
    <div>
        <form onSubmit={mySubmit} className='from122'>

             <label>FristName</label>
            <input type="text" name="fname" className="coll-11" value={item.fname}  onChange={hendal}/> <br/>

            <label>LatsName</label>
            <input type="text" name="Lname" className="coll-11" value={item.Lname}  onChange={hendal}/><br/>

            <label>City</label>
            <input type="text" name="City" className="coll-11" value={item.City}   onChange={hendal}/><br/>

            <label>contanumber</label>
            <input type="text" name="Cnuber" className="coll-11" value={item.Cnuber} onChange={hendal}/><br/>

            <label>email</label>
            <input type="text" name="email" className="coll-11"  onChange={hendal}/><br/>

            <label>Addres</label>
            <input type="text" name="Addres" className="coll-11" onChange={hendal}/><br/><br/>

            <input type='submit' className='btn btn-dark' value="Save"/><br/>

            <Deletitem12 myround={data} remove={Mydelete} add={addvalue}/>

        </form>
    </div>
  )
}
