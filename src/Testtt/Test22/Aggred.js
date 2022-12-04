import React ,{useState, useEffect} from 'react'
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export default function Aggred() {
    
    const [data, setdata] = useState([
        {field :'postId', filter: true},
        {field :'id',  filter: true},
        {field :'name' ,filter: true},
        {field :'email',filter: true}, 
        {field :'body'}
    ]);

   const [row, setrow] = useState();

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/comments')
       .then( p => p.json())
       .then( p => {
        setrow(p)
       })
    }, []);


  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>

        <AgGridReact
        rowData={row}
        columnDefs={data}
           
           >
        </AgGridReact>
    </div>
  )
}
