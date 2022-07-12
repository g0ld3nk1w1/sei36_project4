import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct, Product } from "./Product";

//Size each card here via columns and rows
export const ProductContainer = () => {
  const [allProducts, setAllProducts] = useState(Array<IProduct>);
  //Pull and maps out all relevant products
  useEffect(() => {
    axios.get("/api/product")
    .then(res => setAllProducts(res.data.product));
  },[])

  return (
    <div className="columns is-narrow">
        <div className="box">
            <p className="title block is-vcentered"> Products</p>
   <div className="columns is-vcentered">
    {allProducts
    .filter(ele => ele.isDisplayed === true)
    .map((ele : IProduct, i) => {
    return (<Product item={ele} key ={i}/>)})}
  </div>
  </div>
  </div>
)}
