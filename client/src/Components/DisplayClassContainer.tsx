import axios from "axios";
import { useEffect, useState } from "react";
import { EClass, IClass } from "./Class";

//Pull and maps out all relevant class 


export const ClassContainer = () => {
  const [classList, setClassList] = useState(Array<IClass>);
  //Pull and maps out all relevant products
  useEffect(() => {
    axios.get("/api/class")
    .then(res => setClassList(res.data.class));
  },[])

  return (
    <div className="columns is-narrow">
        <div className="column">
            <p className="title block is-vcentered"> Classes</p>
   <div className="columns is-vcentered is-multiline">
    {classList
    .filter(ele => ele.isDisplayed === true)
    .map((ele : IClass, i) => {
    return (<div className="column is-3" key={i}>
    <EClass item={ele}/>
    </div>)})}
  </div>
  </div>
  </div>
)}
