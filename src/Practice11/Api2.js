import React, { useState, useEffect } from 'react'


export default function Api2() {

     const [data,setdata] = useState([]);

     useEffect(() => {
        fetch('https://api.fda.gov/food/enforcement.json?limit=10')
        .then(p => p.json())
        .then(p => {
            setdata(p)
        })
       
     }, []);   

  return (
    <div> 
        4444 ...

        <table>
        {data?. results?. map( (val) => {
            return(
             
                <tr>
                    <td>{val.country}</td>
                    <td>{val.city}</td>   
                    <td>{val.address_1}</td>
                    <td>{val.reason_for_recall}</td>
                    <td>{val.product_quantity}</td>
                    <td>{val.code_info}</td> 
                    <td>{val.center_classification_date}</td> 
                    <td>{val.distribution_pattern}</td> 
                    <td>{val.state}</td> 
                    <td>{val.product_description}</td> 
                    <td>{val.report_date}</td> 
                    <td>{val.classification}</td> 
                    <td>{val.recalling_firm}</td> 
                    <td>{val.product_type}</td> 
                    <td>{val.recall_number}</td> 

                </tr>
            );
        })}
        </table>
    </div>
  )
}
