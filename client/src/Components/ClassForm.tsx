import axios from "axios";
import { BaseSyntheticEvent, useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import { useNavigate } from "react-router-dom";
import { EClass } from "./ClassCard";

enum Dunit {
    HOURS = "Hours",
    DAYS = "Days",
    MINUTES = "Minutes"
}


export const ClassForm = () => {
  const [classDraft, setClassDraft] = useState({
    registrationDate: new Date(),
    closingDate: new Date(),
    classDate: [{
        startDate: new Date(),
        endDate: new Date(),
    }],
    name: "",
    images: [""],
    min: 0,
    max: 0,
    duration: 0,
    durationUnit: "",
    cost: 0.0,
    isActive: false,
    isDisplayed: false,
    description: "",
    conditions: ""
  });

  const [preview, setPreview] = useState(false);
  const [override, setOverride] = useState({
    registrationDate: "",
    closingDate: "",
    classDate: [{
        startDate: "",
        endDate: "",
    }],
  })
  const nav = useNavigate();

  const handlePreview = (event: React.MouseEvent) =>{
    event.preventDefault();
    setOverride({
      registrationDate: classDraft.registrationDate.toISOString(),
      closingDate: classDraft.closingDate.toISOString(),
      classDate: [{
          startDate: classDraft.classDate[0].startDate.toISOString(),
          endDate: classDraft.classDate[0].endDate.toISOString(),
      }],
    })
    setPreview(true);
  }

  const resetPreview = (event: BaseSyntheticEvent) =>{
    event.preventDefault();
    setPreview(false)
  }

  const handleFormSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(classDraft)
    axios.post("/class",{
      ...classDraft,
      isDisplayed: true
    }).then( res => {alert("Class Published!"); nav("/class")})
    .catch(err => alert("Failed to create class!"));
  }
  
  return (
    <>
      <div className="column">
        <section className="hero box">
          <form onSubmit={handleFormSubmit}>
          <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Name of class</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Unique Class Name"
                  onChange={(e) => {classDraft.name = e.target.value;resetPreview(e)}}
                />
              </div>
            </div>
            </div>
            <div className="column">
            <div className="field">
              <label className="label">URL Image of class</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Input link to hosted image here"
                  onChange={(e) => { classDraft.images = [e.target.value];resetPreview(e)}}
                />
              </div>
            </div>
            </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Description about the class"
                      onChange={(e) => { classDraft.description = e.target.value;resetPreview(e)}}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">Conditions</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Any special conditions for the class"
                      onChange={(e) => { classDraft.conditions = e.target.value;resetPreview(e)}}
                    />
                  </div>
                </div>
              </div>
            </div>

        <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">Minimum to start: </label>
            </div>
            <div className="field-body">
          <div className="field is-narrow" >
            <div className="control">
            <input className="input" type="number" min={0} 
            onChange={(e) => { classDraft.min = Number.parseInt(e.target.value);resetPreview(e)}}></input>
            </div>
            </div></div>

            <div className="field-label is-normal">
            <label className="label">Maximum Capacity: </label>
            </div>
            
            <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
            <input className="input" type="number" min={0}
            onChange={(e) => { classDraft.max = Number.parseInt(e.target.value);resetPreview(e)}}></input>
            </div>
            </div></div>
        </div>

        <div className="field is-horizontal">
        <div className="field-label is-normal">
        <label className="label">Duration:</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
            <input className="input" type="number" min={0}
            onChange={(e) => { classDraft.duration = parseFloat(e.target.value);resetPreview(e)}}></input>
            </div>
            </div>
            </div>

            <div className="field-label is-normal">
            <label className="label">Duration Unit:</label>
            </div>
            <div className="field-body">
          <div className="field ">
            <div className="control">
            <div className="select is-fullwidth">
            <select onChange={e => {classDraft.durationUnit = e.currentTarget.value;resetPreview(e)}}>
                    <option>Select unit</option>
                    <option value={Dunit.HOURS}>Hours</option>
                    <option value={Dunit.DAYS}>Days</option>
                    <option value={Dunit.MINUTES}>Minutes</option>
                  </select>
            </div>
            </div>
            </div>
            </div>
        </div>

        <div className="level field">
        <label className="label">Class Start Date:</label>
            <div className="control">
                <DateTimePicker 
                onChange={inputDate => {
                    const newDate = {startDate: inputDate, endDate: classDraft.classDate[0].endDate};
                    setClassDraft({...classDraft, classDate:[newDate]});
                    }}
                value={classDraft.classDate[0].startDate}
                disableClock={true} />
        </div>

        <label className="label">Class End Date:</label>
            <div className="control">
            <DateTimePicker 
                onChange={inputDate => {
                    const newDate = {startDate: classDraft.classDate[0].endDate, endDate: inputDate};
                    setClassDraft({...classDraft, classDate:[newDate]});
                    }}
                value={classDraft.classDate[0].endDate}
                disableClock={true} />
            </div>
        </div>

        <div className="level">
        <label className="label">Registration Date:</label>
            <div className="control">
                <DateTimePicker onChange={inputDate => setClassDraft({...classDraft,registrationDate: inputDate})}
                value={classDraft.registrationDate}
                disableClock={true} />
        </div>
        
        <label className="label">Closing Date:</label>
            <div className="control">
                <DateTimePicker onChange={inputDate => setClassDraft({...classDraft,closingDate: inputDate})}
                                value={classDraft.closingDate}
                                disableClock={true} />
            </div>
        </div>
        

        <div className="field">
              <label className="label">Cost of Class</label>
              <div className="control">
                <input
                  className="input"
                  type="number" step={0.01}
                  placeholder="Input price e.g. 9.99"
                  onChange={(e) => {classDraft.cost = parseFloat(e.target.value);resetPreview(e)}}
                />
              </div>
            </div>

            { /* instructor materials */}

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" /> I agree to the{" "}
                  <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field is-grouped is-grouped-right ">
              <div className="control">
                <button className="button is-link is-light" onClick={(e) => handlePreview(e)}>Preview</button>
              </div>
              {/* <div className="control">
                <button className="button is-link is-light">Save</button>
              </div> */}
              <div className="control">
                <button type="submit" className="button is-link is-light">
                  Publish
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div className="column">
        <p className="title has-text-centered">Preview</p>
        <div className="columns is-centered">
          {preview ? <EClass item={{...classDraft, ...override ,enrollmentNum:0, }}/> : ""} 
        </div>
      </div>
    </>
  );
};
