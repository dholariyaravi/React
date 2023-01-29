import React, { useState } from 'react'
import CounterS1 from './CounterS1';

export default function FormS1() {

    const [mydelet, setmydelet] = useState([]);
    
    const [ index, setindex] = useState(-1);
     
    const [data, setdata] = useState({
        Fname:'',
        nuber:"",
        addres:'',
        city:'',
        counter:"",
    });

    const mychenj = (e) => {
        setdata({...data , [e.target.name]: e.target.value});
    }

    const delete1 = (index) =>{
        let  mydata = [...mydelet];
        mydata.splice(index,1);
        setmydelet(mydata);
    }

    const Edit1 = (index) => {
        let mydata =  mydelet[index];
        setdata(mydata);
        setindex(index);
    }

   

    const mysubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        if(index >0){

            let s = [...mydelet];
            s[index].Fname = data.Fname;
            s[index].nuber = data.nuber;
            s[index].addres = data.addres;
            s[index].city = data.city;
            s[index].counter = data.counter;

            setmydelet(s);
        }else{
            let mydata = [...mydelet];
            mydata.push(data);
            setmydelet(mydata);
    
        }
    };

     
  return (
    <div>
       
        <form onSubmit={mysubmit}>
          
            <input type='text' name='Fname' value={data.Fname}  placeholder='Fname' onChange={mychenj} />
            <input type='text' name='nuber'  value={data.nuber}    placeholder='Nuber'  onChange={mychenj} />
            <input type='text' name='addres'   value={data.addres}    placeholder='addres'  onChange={mychenj} />
            <input type='text' name='city'   value={data.city}    placeholder='city'  onChange={mychenj} />
            <input type='text' name='counter'   value={data.counter}   placeholder='counert'  onChange={mychenj} />
            <input type='submit' value='Save' />

        </form>
        
         <CounterS1 rodet={mydelet} remove={delete1}  add={Edit1} />
        

       
    </div>
  )
}
