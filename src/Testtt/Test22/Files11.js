import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Files11() {

    const [data, setdata] = useState(null);
    const [upload1, setupload1] = useState([]);

    const hedal = (e) => {
        setdata(e.target.files[0]);
    }
    const myclick = (e) => {
        let formdata = new FormData();
        formdata.append('file',data);

        axios.post('http://localhost:8080/upload',formdata)
        .then( p => {
            console.log(p.data)
        })
        console.log(e.data)
    }

    useEffect(() => {
        axios.get('http://localhost:8080/files')
        .then(p => {
             setupload1(p.data)
        })
       
    });


  return (
    <div>
        <input type='file' onChange={hedal} />
        <button type='Button' value='Save' onClick={myclick}>Save</button>
         
         <table>
        {upload1.map ( (val) => { 
            return(
                <tr>
                    <td>{val.name}</td>
                    <td>{val.url}</td>
                    <td>
                        <button>
                            <a href='val.url'>download</a>

                        </button>
                    </td>
                    
                </tr>
            )


        })}
        </table>
    </div>
  )
}
