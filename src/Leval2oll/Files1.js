import axios from 'axios';
import React, { useState,useEffect } from 'react'

export default function Files1() {

    const [data, setdata] = useState(null);
     const [data1, setdata1] = useState([]);


    const myhadal = (e) => {
        setdata(e.target.files[0]);             

    }
    const myclick = (e) => {
        let formdata = new FormData();
        formdata.append('file',data);

        axios.post("http://localhost:8080/upload",formdata)
        .then(p => {
            console.log(p.data)
        })
      }

    useEffect(() => {
        axios.get('http://localhost:8080/files')
        .then(p => {
            setdata1(p.data)
        })
    });


  return (
    <div>

       <input type='file'onChange={myhadal} />
        <input type='button' onClick={myclick} value="Save"/>
        <table>
            {data1.map((val)=> {
                return(  
                    <tr>
                    <td>{val.name}</td>
                    <td>{val.url}</td>
                    <td>
                    <button  >
                        <a href={val.url}>download</a>
                        
                    </button>
                    </td>
                  </tr>
                )
            })}
           
        </table>
         
    </div>
  )
}
