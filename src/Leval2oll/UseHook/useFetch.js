import React,{useEffect, useState} from 'react'

export const useFetch = (url) => {

    const [loading, setloading] = useState(true);
     const[data,setdata] = useState([]);

     const getData= async()=> {

        const response = await fetch(url);
        const mydata = await response.json();

        setdata(mydata);
        setloading(false);
     }

  useEffect(() => {
    
     getData();

  }, [url]);

  return {loading,data}

}
