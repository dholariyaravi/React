import React, { useMemo ,useState,} from 'react'

export default function Memo22(props) {
     
    const [shomore, setshomore] = useState(false);
 
    const turn1 = useMemo( () => {
        return props.text.slice(0, 25).concat('...');
  
     },[props])
     

  return (
    <div>
        <p onClick={ () => {setshomore(!shomore)}}>
         {shomore? props.text: turn1}
         </p>
        
    </div>
  )
}
