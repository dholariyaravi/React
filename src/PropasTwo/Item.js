import React, { useState } from 'react'
import Item1 from './Item1';

export default function Item() {

    const [data, setdata]= useState([]);
     
      const [item,setitem]= useState({
         
        cname:'',
        cno:" ",
      });

     const hedal = (e) => {
        setitem({...item, [e.target.name]: e.target.value  });
     }

      const mysubmit =(p) =>{
        p.preventDefault();

        let mydata = [...data];
        mydata.push(item);
        setdata(mydata);
      };
      const mydelet = (index) => {
        let mydata = [...data];
        mydata.splice(index,1);
        setdata(mydata);


      }

  return (
    <div>
        <form onSubmit={mysubmit}>

            <label>contaname</label>
            <input type="text" name='cname' onChange={hedal} />

            <label>contanumber</label>
            <input type="text" name='cno' onChange={hedal} />

            <input type="submit" value="Save" />
            
            <Item1 round={data} remove={mydelet}></Item1> 
           
            

        </form>
    </div>
  )
}
