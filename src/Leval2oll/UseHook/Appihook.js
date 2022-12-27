import React from 'react'
import { useFetch } from './useFetch'

export default function Appihook() {
 
    const {loading,data} =  useFetch ('https://api2.binance.com/api/v3/ticker/24hr')
          
  return (
    <div>{
            data.map((val) => {

                return(<div>{val.symbol}</div>)

            })
        }
    </div>
  )
}
