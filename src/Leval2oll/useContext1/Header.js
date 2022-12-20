import React, { useContext } from 'react' 
import Contex from './Contex';

export default function Header() {

    const {lan,setlan} = useContext(Contex);

    const myhedar = (e) => {
        setlan(e.target.value)
    }

  return (
    <div>
        <select onChange={myhedar}>
            <option value='en'>English</option>
            <option value='gnj'>Gujrati</option>
            <option value='hd'>Hindi</option>

        </select>
    </div>
  )
}
