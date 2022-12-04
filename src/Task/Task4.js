import React from 'react';


export default function Task4(data) {
    <style>
       
        
    </style>
  return (
    <div>
       
       
     <tr>
      <td> {data.find1.id} </td>
      <td> {data.find1.name}  </td>
     <td> {data.find1.username}  </td>
     <td> {data.find1.email}   </td>
     <td> {data.find1.address.street}  </td>
     <td> {data.find1.address.suite}   </td>
     <td> {data.find1.address.city}  </td>
     <td> {data.find1.address.zipcode}  </td>
     <td> {data.find1.address.geo.lat}  </td>
     <td> {data.find1.address.geo.lng}   </td>
    
     <td> {data.find1.phone} </td>
     <td> {data.find1.website }   </td>
     <td> {data.find1.company.name}   </td>
     <td> {data.find1.company.catchPhrase}   </td>
     <td> {data.find1.company.bs}   </td>
     </tr>     
    
    </div>
  )
}
