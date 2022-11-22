import React , {useState} from 'react'
import Select from 'react-select';
import"./From123.css"

export default function Fromlo124() {

    const [data, setdata] = useState({
        
        firstname:'',
        lastname:'',
        title :' ',
        Eduction: " " ,
        colification: '',
        statdate:'',
        enddate:" ",

    });

     const titledata = [
        {value:'Mr', label:'Mr'},
        {value:'Miss', label:'Miss'},
        {value:'Ms', label:'Ms'},
        {value:'MM', label:'MM'},
     ];
      
     const Eductiondata = [
        {value:'10' , label:'10'},
        {value:'12' , label:'12'},
        {value:'graduate' , label:'graduate'},
        {value:'Master' , label:'Master'} 
     ];

     const colificationdata = [
        {value:'gandar' , label:'gandar'},
        {value:'ST' , label:'ST'},
        {value:'SEBC' , label:'SEBC'},
        {value:'SC' , label:'SC'} 
     ]
     

     const handalar = (e) => {
        console.log(e)
        setdata({...data, [e.target.name]: e.target.value})
        

     };

     const handalSubmit = (e) => {
        e.preventDefault();
        console.log(data);
     };


  return (
    <div>

       <div class="title">Welcome</div>
        <form onSubmit={handalSubmit}>

            <label class='bg12'>Name</label>
            <input class="input-container ic1 " type='text' placeholder='Firstname' name="firstname" onChange={handalar}/>
            <input class="input-container ic1 " type='text' placeholder='Lastname' name="lastname" onChange={handalar}/> <br/><br/>

            <label class='bg12'>Title</label>
            <Select   
              onChange={ (e) => { 
                 handalar({target: {name:'title',  value:e.value }})  }}
                 name='title'
                 
                 options = {titledata}
            /><br/>
              
              <label class='bg12'>Eduction</label>
            <Select
            onChange={(e) => {
                handalar({ target: {name:'Eduction', value:e.value}}) }}
                name="Eduction"
                options={Eductiondata}
            /> <br/>

           <label class='bg12'>colificationdata</label>
            <Select 
            onChange={(e) => {
                handalar({ target: {name:'colification', value:e.value}}) }}
                name="colification"
                options={colificationdata}
            /> <br/>

            <label class='bg12' for="birthday">Statdate</label>
            <input class="input-container ic1 "  type="date" id="birthday"  onChange={handalar} name="statdate"/>

            <label class='bg12' for="birthday">Enddate</label>
            <input class="input-container ic1"  type="date" id="birthday"  onChange={handalar} name="enddate"/> <br/> <br/>

            <input type='checkbox' name='value' value=" " onClick={handalar}/> <br/>

            <input type='submit' value='Save'/>


               
    
                  
             

        </form>
        
    </div>
  )
}
