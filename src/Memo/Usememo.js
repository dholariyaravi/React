import React,{useMemo, useState} from 'react'


export default function Usememo(props) {

     const [data1, setdata1] = useState(false);
      
      const mydata = useMemo ( () => {
      return props.text.slice(0, 35).concat('...')

      }, [props])

  return (
    <div>
      <p onClick={ () => {setdata1 (!data1)}}>
        {data1? props.text: mydata}
      </p>
    </div>
  )
}
