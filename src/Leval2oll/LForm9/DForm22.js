import { TextField } from '@mui/material';
import React, { useState } from 'react'

export default function DForm22() {

     const [data, setdata] = useState({
        FirstName:'',
        LastName:'',
        Addres:'',
        city:'',
        State:'',
        county:'',
     });

      const [upssList, setupssList] = useState ([{
        Edulavel:'',
        univarscity:'',
        degre:'',
        StartDate:'',
        endDate:'',

      }]);

      const [Experas, setExperas] = useState([{
        comany:'',
        degignetion:'',
        StartDate:'',
        endDate:'',

      }]);
     
       const mychenj = (e) => {
        setdata({...data , [e.target.name]: e.target.value});
       }

       const mySubmit = e => {
        e.preventDefault();
        console.log(data);  
        console.log(upssList);
        console.log(Experas);  
       }    
    //    *************************************************************************/

       const handleAddClick = () => {
        setupssList ([...upssList, {   Edulavel:'', univarscity:'',
        degre:'',
        StartDate:'',
        endDate:'', }]);
      };

    // handle input change
     const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...upssList];
    list[index][name] = value;
    setupssList(list);
  };

  const handleRemoveClick = index => {
    const list = [...upssList];
    list.splice(index, 1);
    setupssList(list);
  };
   
  // ================================================================= 
        const handleAddClick11 = () => {
         setExperas ([...Experas, {  comany:'',
         degignetion:'',
         StartDate:'',
         endDate:'', }]);
        };


     // handle input change
     const handleInputChange11 = (e, index) => {
        const { name, value } = e.target;
        const list = [...Experas];
        list[index][name] = value;
        setExperas(list);
      };



  
       
  return (
    <div>
        <form onSubmit={mySubmit} className="from122">
            <h2>Basic informention</h2>
        <TextField  label="FirstName" variant="outlined" className='coll-11' name="FirstName" onChange={mychenj}/><br/><br/>
        <TextField  label="LastName" variant="outlined" className='coll-11' name="LastName" onChange={mychenj}/><br/><br/>
        <TextField  label="Addres" variant="outlined" className='coll-11' name="Addres" onChange={mychenj}/><br/><br/>
        <TextField  label="city" variant="outlined" className='coll-11' name="city" onChange={mychenj}/><br/><br/>
        <TextField  label="State" variant="outlined" className='coll-11' name="State" onChange={mychenj}/><br/><br/>
        <TextField  label="county" variant="outlined" className='coll-11' name="county" onChange={mychenj}/><br/><br/>
       
        


        <h2>Education</h2><br/><br/>
             {upssList.map((x,i)=> {
                return(
                    <div key={i}> 

                   <TextField select name="Edulavel"  value={x.Egucation} className='coll-11'  label="Edulavel" onChange={e => handleInputChange(e, i)}   SelectProps={{native: true,}}  >
                    <option>gucation</option><option>10 Pass</option> <option>12 pass</option><option>B.com</option><option>master</option>
                    </TextField><br/><br/>

                <TextField  label="univarscity" variant="outlined"  value={x.univarscity} onChange={e => handleInputChange(e, i)} className='coll-11' name="univarscity"/><br/><br/>
                <TextField  label="degre" variant="outlined"  value={x.degre} onChange={e => handleInputChange(e, i)} className='coll-11' name="degre" /><br/><br/>
                <TextField  label="StartDate" variant="outlined"  value={x.StartDate} onChange={e => handleInputChange(e, i)} className='coll-11' name="StartDate" /><br/><br/>
                <TextField  label="endDate" variant="outlined"  value={x.endDate} onChange={e => handleInputChange(e, i)} className='coll-11' name="endDate" /><br/><br/>

            
                {/* <input type='button' value='add'onClick={handleAddClick}  className='btn btn-dark'/> */}


                <div className="btn-box btn btn-dark">
              {upssList.length !== 1 && <button
                className="mr10 btn btn-dark"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {upssList.length - 1 === i && <button  className='btn btn-dark' onClick={handleAddClick}>Add</button>}
            </div>
                        
                    </div>
                )
             })}


  
            <h2>Company</h2><br/><br/>
            {Experas.map((x,i)=> {
                return(
                    <div key={i}>
                   
             <TextField  label="comany" variant="outlined"  value={x.comany} onChange={e => handleInputChange11(e, i)} className='coll-11' name="comany"/><br/><br/>
            <TextField  label="degignetion" variant="outlined"  value={x.degignetion} onChange={e => handleInputChange11(e, i)} className='coll-11' name="degignetion"/><br/><br/>
            <TextField  label="StartDate" variant="outlined"  value={x.StartDate} onChange={e => handleInputChange11(e, i)} className='coll-11' name="StartDate"/><br/><br/>
            <TextField  label="endDate" variant="outlined"  value={x.endDate} onChange={e => handleInputChange11(e, i)} className='coll-11' name="endDate"/><br/><br/>
                   
            <input type='button' value='add'onClick={handleAddClick11}  className='btn btn-dark'/> 
            <input type='submit'value='Save' className='btn btn-dark'/>
                    </div>
                )
            })}

           
          
  
                    




      






        </form>
        
    </div>
  )
}
