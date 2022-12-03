import React, {useState, useEffect} from 'react'
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export default function Grid2img() {
 
    const [column, setcolumn] = useState([
        {field:'albumId' , filter: true},
        {field:'id' , filter: true},
        {field:"title", filter:true},
        {field:'url', filter:Image.true}
        
    ]);

    const [row, setrow] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(p =>p.json())
        .then( p=> {
            setrow(p)
        })
    }, []);

  return (
    <div className="ag-theme-alpine" style={{width: 500, height: 500}}>

        <AgGridReact
            rowData={row} 
            columnDefs={column}  
        >
        </AgGridReact>
        
    </div>
  )
}
