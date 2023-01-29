import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function DForm22() {
  const [data, setdata] = useState({
    FirstName: "",
    LastName: "",
    Addres: "",
    city: "",
    State: "",
    county: "",
  });

  const [upssList, setupssList] = useState([
    {
      Edulavel: "",
      univarscity: "",
      degre: "",
      StartDate: "",
      endDate: "",
    },
  ]);

  const [Experas, setExperas] = useState([
    {
      comany: "",
      degignetion: "",
      StartDate: "",
      endDate: "",
    },
  ]);

  //    *************************************************************************/2222

  const handleAddClick = () => {
    setupssList([
      ...upssList,
      { Edulavel: "", univarscity: "", degre: "", StartDate: "", endDate: "" },
    ]);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...upssList];
    list[index][name] = value;
    setupssList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...upssList];
    list.splice(index, 1);
    setupssList(list);
  };

  // =================================================================333
  const handleAddClick11 = () => {
    setExperas([
      ...Experas,
      { comany: "", degignetion: "", StartDate: "", endDate: "" },
    ]);
  };

  // handle input change
  const handleInputChange11 = (e, index) => {
    const { name, value } = e.target;
    const list = [...Experas];
    list[index][name] = value;
    setExperas(list);
  };
  const handleRemoveClick11 = (index) => {
    const list = [...Experas];
    list.splice(index, 1);
    setExperas(list);
  };

  // ==================================================111
         // Basic informention
  const mychenj = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const mySubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(upssList);
    console.log(Experas);
  };

  // ====================================////////////// 0000

  const handleReset = () => {
    Array.from(document.querySelectorAll("TextField")).forEach(
      (TextField) => (TextField.value = "")
    );
  };

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "8px",
    fontFamily: "Arial"
  };


  return (
    <div>
      <form onSubmit={mySubmit} className="from122">
        <h2 style={mystyle}>Basic informention</h2>

        <TextField
          label="FirstName"
          variant="outlined"
          className="coll-11"
          name="FirstName"
          onChange={mychenj}
        />
        <br />
        <br />
        <TextField
          label="LastName"
          variant="outlined"
          className="coll-11"
          name="LastName"
          onChange={mychenj}
        />
        <br />
        <br />
        <TextField
          label="Addres"
          variant="outlined"
          className="coll-11"
          name="Addres"
          onChange={mychenj}
        />
        <br />
        <br />
        <TextField
          label="city"
          variant="outlined"
          className="coll-11"
          name="city"
          onChange={mychenj}
        />
        <br />
        <br />
        <TextField
          label="State"
          variant="outlined"
          className="coll-11"
          name="State"
          onChange={mychenj}
        />
        <br />
        <br />
        <TextField
          label="county"
          variant="outlined"
          className="coll-11"
          name="county"
          onChange={mychenj}
        />
        <br/>
        <br/>
 
        
  {/* ======================================>>>>>>>>>>>>>>  */}
          <br/>
        <h2 style={mystyle}>Education</h2>
      
        {upssList.map((x, i) => {
          return (
            <div key={i}>
              <TextField
                select
                name="Edulavel"
                value={x.Egucation}
                className="coll-11"
                label="Edulavel"
                onChange={(e) => handleInputChange(e, i)}
                SelectProps={{ native: true }}
              >
                <option>gucation</option>
                <option>10 Pass</option> <option>12 pass</option>
                <option>B.com</option>
                <option>master</option>
              </TextField>
              <br />
              <br />

              <TextField
                label="univarscity"
                variant="outlined"
                value={x.univarscity}
                onChange={(e) => handleInputChange(e, i)}
                className="coll-11"
                name="univarscity"
              />
              <br />
              <br />
              <TextField
                label="degre"
                variant="outlined"
                value={x.degre}
                onChange={(e) => handleInputChange(e, i)}
                className="coll-11"
                name="degre"
              />
              <br />
              <br />
              <TextField
               
                variant="outlined"
                value={x.StartDate}
                onChange={(e) => handleInputChange(e, i)}
                className="coll-11"
                name="StartDate"
                type='date'
              />
              <br />
              <br />
              <TextField
                value={x.endDate}
                onChange={(e) => handleInputChange(e, i)}
                className="coll-11"
                type='date'
                name="endDate"
              />
              <br />
              <br />

              <div className="btn-box btn btn-dark">
                {upssList.length !== 1 && (
                  <button
                    className="mr10 btn btn-dark"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
                {upssList.length - 1 === i && (
                  <button className="btn btn-dark" onClick={handleAddClick}>
                  ➕
                  </button>
                )}
              </div>

            </div>
          );
        })}
           <br />
    {/* =============================>>>>>>>>>>>>>>>>>>>>>>>>>>  */}

        <h2 style={mystyle}>Company</h2>
    
        {Experas.map((x, i) => {
          return (
            <div key={i}>
              <TextField
                label="comany"
                variant="outlined"
                value={x.comany}
                onChange={(e) => handleInputChange11(e, i)}
                className="coll-11"
                name="comany"
              />
              <br />
              <br />
              <TextField
                label="degignetion"
                variant="outlined"
                value={x.degignetion}
                onChange={(e) => handleInputChange11(e, i)}
                className="coll-11"
                name="degignetion"
              />
              <br />
              <br />
              <TextField
                // label="StartDate"
                variant="outlined"
                value={x.StartDate}
                type='date'
                onChange={(e) => handleInputChange11(e, i)}
                className="coll-11"
                name="StartDate"
              />
              <br />
              <br />
              <TextField
                // label="endDate"
                variant="outlined"
                value={x.endDate}
                type='date'
                onChange={(e) => handleInputChange11(e, i)}
                className="coll-11"
                name="endDate"
              />
              <br />
              <br />

              <div className="btn-box btn btn-dark">
                {Experas.length !== 1 && (
                  <button
                    className="mr10 btn btn-dark"
                    onClick={() => handleRemoveClick11(i)}
                  >
                    Remove
                  </button>
                )}
                {Experas.length - 1 === i && (
                  <button className="btn btn-dark" onClick={handleAddClick11}>
                         ➕
                  </button>
                )}
              </div>
              
            </div>
          );
        })}
        
        
         <br/>

        <div className="text-center">
          <input type="submit" value="Submit" className="btn btn-dark" />
          <button onClick={handleReset} className="btn ">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
