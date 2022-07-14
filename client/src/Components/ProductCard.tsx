//Singular Card showing product
//Must exist within a container

import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROLE, UserContext } from "./RoleContext";

export interface IProduct {
    name: string,
    imgurl: string[],
    qty: number,
    cost: number,
    isActive?: boolean,
    isDisplayed?: boolean,
    _id: string
}

export const Product = (props: {item : IProduct}) => {
  const userRole = useContext(UserContext);
  const isUserAI = userRole === ROLE.ADMIN || userRole === ROLE.INSTRUCTOR;

  const nav = useNavigate();

  const handleUnpublish = (id: string) => {
    axios.delete(`/product/${id}`).then(
      res => nav("/product")
    ).catch(()=> alert("Failed to unlist!"))
  }
 return (
<div className="card">
  <div className="card-image">
    <figure className="image is-5by3">
      <img src={props.item.imgurl[0]} alt="image of product"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{props.item.name}</p>
        <p className="subtitle is-6">qty remaining: {props.item.qty}</p>
      </div>
    </div>

    {userRole? 
    (<div className="content">
        <p>Price: ${props.item.cost}</p>
      <br></br>
    </div>) :""}
    <footer className="card-footer">
    {isUserAI? 
    <Link to= "/" className="card-footer-item" onClick={() => handleUnpublish(props.item._id)}>Unlist</Link> : "" }
    <Link to= "/" className="card-footer-item">Add to Cart</Link>
    </footer>
  </div>
</div>
)};