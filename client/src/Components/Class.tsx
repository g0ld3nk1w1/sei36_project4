//Singular Card for Class

import { Link } from "react-router-dom";
import { EnumType } from "typescript";

export interface IClass {
    name: string,
    images: string[],
    min: number,
    max: number,
    isActive: boolean,
    isDisplayed: boolean,
    duration: number,
    durationUnit: EnumType,
    registrationDate: Date,
    closingDate: Date,
    cost: number,
    enrollmentNum: number
}
export const EClass = (props: {item : IClass}) => {
 return (
<div className="card">
  <div className="card-image">
    <figure className="image is-5by3">
      <img src={props.item.images[0]} alt="image of class"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{props.item.name}</p>
        <p className="subtitle is-6">minimum sign ups to start class: {props.item.min}</p>
        <p className="subtitle is-6">current enrollment capacity: {props.item.enrollmentNum}</p>
      </div>
    </div>

    <div className="content">
        <p>Price: ${props.item.cost}</p>
      <br></br>
    </div>
    <footer className="card-footer">
    <Link to= "/" className="card-footer-item">Edit</Link>
    <Link to= "/"className="card-footer-item">Details</Link>
    <Link to= "/" className="card-footer-item">Add to Cart</Link>
    </footer>
  </div>
</div>
)};