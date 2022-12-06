import React , {useState} from 'react'
import Memo2 from './Memo2';

export default function Memo1() {
    const [item, setitem] = useState([]);
     
    const [data, setdata] = useState("");
      

    const myhendal = (e) => {
            setdata(e.target.value)
    } 
     
    const mydata = (e) => {
          let myda1 =[...item];
          myda1.push(data);
          setitem(myda1);

    }
  return (
    <div>
        <input type='text' onChange={myhendal} />

         <button onClick={mydata}>click</button>

         <Memo2 data={item}></Memo2>
    </div>
  )
}
