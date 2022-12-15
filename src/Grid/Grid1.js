import React ,{useState,useEffect} from 'react'
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export default function Grid1() {

    const [column,setcolumn] = useState([
        {field:"postId"},
        {field:"id", filter: true},
        {field:"name", filter: true},
        {field:"email", filter: true}, 
        {field:"body", filter: true}

    ]);
    const [row, setrow] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(p => p.json())
        .then( p => {
            setrow(p);
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
