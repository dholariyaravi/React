import React, { useState, useEffect } from 'react'


export default function Api() {

     const [data,setdata] = useState([]);

     useEffect(() => {
        fetch('https://api2.binance.com/api/v3/ticker/24hr')
        .then(p => p.json())
        .then(p => {
            setdata(p)
        })
       
     }, []);   

  return (
    <div>
        
        111111 ....
       
        <table>
        {data.map( (val) => {
            return(
             
                <tr>
                    <td>{val.symbol}</td>
                    <td>{val.priceChange}</td>   
                    <td>{val.priceChangePercent}</td>
                    <td>{val.weightedAvgPrice}</td>
                    <td>{val.prevClosePrice}</td>
                    <td>{val.priceChange}</td> 
                    <td>{val.lastPrice}</td>
                </tr>
            );
        })}
        </table>
    </div>
  )
}
