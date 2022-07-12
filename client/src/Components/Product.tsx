//Singular Card showing product
//Must exist within a container

import { Link } from "react-router-dom";

export interface IProduct {
    name: string,
    imgurl: string[],
    qty: number,
    cost: number,
    isActive: boolean,
    isDisplayed: boolean
}
export const Product = (props: {item : IProduct}) => {
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

    <div className="content">
        <p>Cost: ${props.item.cost}</p>
      <br></br>
    </div>
    <footer className="card-footer">
    <Link to= "/" className="card-footer-item">Edit</Link>
    <Link to= "/"className="card-footer-item">Wishlist</Link>
    <Link to= "/" className="card-footer-item">Add to Cart</Link>
    </footer>
  </div>
</div>
)};