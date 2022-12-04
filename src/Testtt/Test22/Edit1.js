import React, {useState} from 'react'
import Edit2 from './Edit2';


export default function Edit1() {
    const [Search,setSearch ] = useState("");
  
    const [index, setindex] = useState(-1);

    const [data, setdata] = useState([]);

    const [item, setitem] = useState({
        Fname:' ',
        Lname:' ',
        City:' ',
        Addres:' ',
        MNobar:' '
        
    });

     const hedal = (e)=> {
         setitem ({...item, [e.target.name] : e.target.value});
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
      };

      const Search1 = (e) => {
        setSearch(e.target.value)
     }

     const mysubmit = (e) => {
        e.preventDefault();

        if(index >=0){

            let k = [...data];
           k[index].Fname = item.Fname;
           k[index].Lname = item.Lname;
           k[index].City = item.City;
           k[index].Addres = item.Addres;
           k[index].MNobar = item.MNobar;

           setdata(k);
        } else{
            let mydata = [...data];
            mydata.push(item);
            setdata(mydata);
        }
     };
      
     
  return (
    <div>
        <form onSubmit={mysubmit}>

            <label>Fname</label>
            <input type='text' name='Fname' value={item.Fname} onChange={hedal} /> <br/>

            <label>Lname</label>
            <input type='text' name='Lname' value={item.Lname} onChange={hedal} /> <br/>

            <label>City</label>
            <input type='text' name='City' value={item.City} onChange={hedal} /> <br/> 

            <label>Addres</label>
            <input type='text' name='Addres'value={item.Addres} onChange={hedal} /><br/>

            <label>MNobar</label>
            <input type='text' name='MNobar' value={item.MNobar} onChange={hedal} />

            <input type='submit' value='save' className="coll-11 btn"  /> <br/>
  
            <label>Search</label>  
            <input type='Search' onChange={Search1} value={Search} />
        

        </form>

        <Edit2 round={data} remove={mydelet} add={Edit} find={Search} ></Edit2>
      

    </div>
  )
}
