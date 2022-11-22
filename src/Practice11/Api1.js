import axios from 'axios';
import React, { useState, useEffect } from 'react'


function Api1(){
  
    const [data,setdata] = useState([]);

    useEffect(() => {
        axios.get('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
        .then( k => {
            setdata(k.data)
        });
       
    }, []);
     
     return(
        <>
        <table>
        {data.map( (value) => {
            return(
                <tr>

                <td>{value.disclosure_year} </td>
                 <td>{value.disclosure_date}</td>
                 <td>{value.transaction_date} </td>
                 <td>{value.owner}</td>
                 <td>{value.ticker}</td>
                <td>{value.disclosure_year}</td>
                </tr>
            );    
        })}
        </table>
             
        </>
     )

}

export default Api1 ;