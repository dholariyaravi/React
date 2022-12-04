import React from 'react'

export default function Datatest2(data) {
  return (
    <div className='col-4'>
        <img src={data.find.url} style={{width:'200px'}} />
        <div>{data.find.title}</div>
        <div>{data.find.albumId}</div>
    </div>
  )
}
