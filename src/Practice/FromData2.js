import React, { useState } from 'react'
import'./CSS/From2.css';


export default function FromData2 () {

    const [state, setstate] = useState( {
        fristname: "", 
        lastname: "",
        mobaliNo: "",
        city : "" ,
        addres: "",
        date:"" ,
        Time: "",
        ReturnDate: "",
        Selectlist: "",
        hobbies:[],
        gender:'',
    });

    const headers = (e) => {

    if(e.target.name == 'hobbies') {
          let mydata = state.hobbies;

          if(e.target.checked){
             mydata.push(e.target.value);
             setstate ({ ... state, 'hobbies': mydata});
             console.log(e.target.checked);
       }
        else{
          let p = mydata.filter( (x) => {
            return x != e.target.value
        })
          setstate({ ...state , hobbies: p })
         };

    } 
        else{
            setstate ({...state, [e.target.name] : e.target.value});
             };
            
      }
   
    const Chenj = (t) => {
        t.preventDefault();
        console.log(state)
    }

   
  return (
    <div  style={{backgroundColor:"rgb(152, 187, 187);"}}> 
            <div class="container mt-5 p-2 w-50"/>
        <h3 class="text-success"> Booking Form</h3>
        <p class="text-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit, error cumque
            necessitatibus, odio officia
            voluptate perferendis incidunt corporis dignissimos quidem aspernatur unde, tenetur architecto doloremque
            totam rem consequatur facilis?</p>
        <hr></hr>
       
        <form onSubmit={Chenj} class="ct22 was-validated">
            <div class="row p-2">
            <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label"> fristName:</label>
                    <input type="text" class="form-control" onChange={headers} name='fristname' id="uname" placeholder="Enter username" 
                        required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
            
            
               <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label">lastName</label>
                    <input type="text" class="form-control" id="uname"   onChange={headers} name='lastname'  placeholder="lastName"  required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label">mobaliNo:</label>
                    <input type="mobaliNo" class="form-control" id="email" onChange={headers} name='mobaliNo'  placeholder="mobaliNo" required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label">city:</label>
                    <input type="text" class="form-control" id="uname" onChange={headers} name='city'  placeholder="city"  required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div> 
                </div>

                <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label">addres:</label>
                    <input type="text" class="form-control" id="uname" onChange={headers} name='addres'  placeholder="addres" required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div> 
                </div>


                <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label">Departure date:</label>
                    <input type="date" class="form-control" id="uname"  onChange={headers} name='date'  placeholder="############"  required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label">Departute Time:</label>
                    <input type="time" class="form-control" id="uname"  onChange={headers} name='Time'  placeholder="############"  required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="col-sm-6 pb-3">
                    <label for="uname" class="form-label">Return Date:</label>
                    <input type="Date" class="form-control" id="uname"  onChange={headers} name='ReturnDate'  placeholder=""  required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>


            <div class="row">
                <div class="col-sm-6 pb-3">
                    <label for="sel1" class="form-label">Select list (select one):</label>
                    <select class="form-select" onChange={headers} id="sel1" name="Selectlist">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>

                <div class="col-sm-3 pt-2">
                    <label for=""></label>
                    <div class="form-check mt-2">
                        <input type="radio" class="form-check-input" id="radio1" name="gender" value="male" onClick={headers}/>
                        <label class="form-check-label" for="radio1">male</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="radio1" name="gender" value="female" onClick={headers}
                            />
                        <label class="form-check-label" for="radio1">female</label>
                    </div>
                </div>

                <div class="col-sm-3 pt-1 ">
                    <label></label>
                    <div class="form-check mt-2">
                         <input type='checkbox' name='hobbies' value='music' onClick={headers}/> 
                         <label class="form-check-label m-2" for="radio1">music</label>
                    </div>
                    
                    <div class="  form-check ">
                       <input type='checkbox' value='cricket' name="hobbies" onClick={headers}/>
                       <label class="form-check-label m-3" for="radio1">cricket </label> 
                    </div>
                 </div>
             </div>
                    
      </div>
        
        <button class='btn btn-dark m-2' type='submit'>Book</button>
        </form>

        
    </div>
  );
}
