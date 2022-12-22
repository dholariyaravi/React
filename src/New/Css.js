import { Link } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Css() {
  return (
    <div>Css
            <a href="httphttps://www.w3schools.com/react/default.asps://www.w3schools.com/">Visit W3Schools!</a>
            <br/>
              <br/>
         <h3 style={{backgroundColor: "lightblue", padding: '20px'}}> Hello CSS</h3>
         <Link to='Html11'></Link>
         <Link to='Javascript'></Link>

             <Outlet/>
             this is data
    </div>
  )
}
