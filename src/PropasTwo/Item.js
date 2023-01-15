import React, { useState } from 'react'
import Item1 from './Item1';

export default function Item() {

  const [Search,setSearch]= useState("");

    const [data, setdata]= useState([]);

    const [index, setindex]= useState(-1);
     
      const [item,setitem]= useState({

        fname:'',
        lname:'',
        university:'',
        city:'', 
        email:'',
        cno:" ",
      });

     const hedal = (e) => {
        setitem({...item, [e.target.name]: e.target.value });
     };

      const mydelet = (index) => {
        let mydata = [...data];
        mydata.splice(index,1);
        setdata(mydata);
      };

       const Edit = (index) => {
        let mydata = data[index];
        setitem(mydata);
        setindex(index);
       }

     
      const Search1 = (e) => {
            setSearch(e.target.value);
      }

      const mysubmit =(p) =>{
        p.preventDefault();

        if(index >=0){

          let s = [...data]
          s[index].fname = item.fname;
          s[index].lname = item.lname;
          s[index].university = item.university;
          s[index].city = item.city;
          s[index].email = item.email;
          s[index].cno = item.cno;

          setdata(s);

        } else{
          let mydata = [...data];
          mydata.push(item);
          setdata(mydata);
        }
      };


  return (
    <div>
        <form onSubmit={mysubmit} className='from122'>

            <label>fristname</label>
            <input type="text" name='fname' value={item.fname} onChange={hedal} className="coll-11" />

            <label>lastname</label>
            <input type="text" name='lname' value={item.lname} onChange={hedal} className="coll-11" />

            <label>city</label>
            <input type="text" name='city' value={item.city} onChange={hedal} className="coll-11" />

            <label>university</label>
            <input type="text" name='university' value={item.university}  onChange={hedal} className="coll-11" />

            <label>email</label>
            <input type="text" name='email' value={item.email}  onChange={hedal} className="coll-11" />

            <label>contanumber</label>
            <input type="text" name='cno' value={item.cno}  onChange={hedal} className="coll-11" />  <br/><br/>


            <input type="submit" value="Save" className="coll-11 btn" />  <br/>   <br/> 

            <label>Search</label>
             <input type='text' onChange={Search1} value={Search}  className="coll-11"  /> <br/>

        </form>

        <Item1 round={data} remove={mydelet} add={Edit} find={Search} ></Item1> 

      
    </div>
  )
}
