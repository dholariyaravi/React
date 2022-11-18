import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function MYcowiddata() {

    const [data1,setdata] = useState({});

    useEffect ( () => {
        axios.get("https://api.rootnet.in/covid19-in/stats/testing/history")
        .then( p => {
            setdata(p.data) ; // json mathi data leva na {[{data}]} 
        })
    },[])
    

  return (
    <div>
        { data1 ?.data?.map( (val) => {
                return(
                <h5>{val.day} <hr/>
              <b>{val.totalSamplesTested}</b>  <br/>
              <b>{val.totalIndividualsTested}</b>  <br/>
              <b>{val.source}</b>  <br/>
              <b>{val.totalPositiveCases}</b> 
            
               
                </h5>
                )
            })
        }
    </div>
  )
}
