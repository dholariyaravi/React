import { Link } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Css() {
  return (
    <div>Css
            <a href="httphttps://www.w3schools.com/react/default.asps://www.w3schools.com/">Visit W3Schools!</a>
            <br/>
            this is data<br/>
            this is data
                 <Link to='Html11'>Html11</Link>
             <Outlet/>
             this is data
    </div>
  )
}
