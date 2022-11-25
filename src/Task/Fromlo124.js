import React , {useState} from 'react'
import Select from 'react-select';
import"./From123.css"

export default function Fromlo124() {

 const [disabled, setdisabled] = useState(false)
  
    const [data, setdata] = useState({
        
        firstname:'',
        lastname:'',
        title :' ',
        Eduction: " " ,
        University: '',
        statdate:'',
        enddate:" ",
        checkbox:'',

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

     const Universitydata = [
        {value:'ms university' , label:'ms university'},
        {value:'parul' , label:'parul'},
        {value:'Marwadi ' , label:'Marwadi '},
        {value:'RK university ' , label:'RK university'} 
     ]
     

     const handalar = (e) => {

      if (e.target.type == "checkbox") {

         if (e.target.checked == true) {
            setdisabled(true);
         
            setdata({...data,"enddate" : ""})
         } 
         else {
            setdisabled(false);
         } 
       } else {

         setdata({ ...data, [e.target.name]: e.target.value});
     }
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

           <label class='bg12'>University</label>
            <Select 
            onChange={(e) => {
                handalar({ target: {name:'University', value:e.value}}) }}
                name="colification"
                options={Universitydata}
            /> <br/>

            <label class='bg12' for="birthday">Statdate</label>
            <input class="input-container ic1 "  type="date" id="birthday"  onChange={handalar} name="statdate"/>

            <label class='bg12' for="birthday">Enddate</label>
            <input class="input-container ic1"  type="date" id="birthday"  onChange={handalar} 
                          disabled={disabled} name="enddate" value={data.enddate}/> <br/> <br/>


            <label class='bg12'>are yoy curren in ms University</label>
            <input type='checkbox' name='checkbox' onClick={handalar} /> <br/>

            <input class='btn12 '  type='submit' value='Save'/>


               
        </form>
        
    </div>
  )
}
