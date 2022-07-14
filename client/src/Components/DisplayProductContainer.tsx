import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct, Product } from "./ProductCard";

//Size each card here via columns and rows
export const ProductContainer = () => {
  const [allProducts, setAllProducts] = useState(Array<IProduct>);
  //Pull and maps out all relevant products
  useEffect(() => {
    axios.get("/product/display")
    .then(res => setAllProducts(res.data.product));
  },[])

  return (
    <div className="columns is-narrow">
        <div className="column">
            <p className="title block is-vcentered"> Products</p>
   <div className="columns is-vcentered is-multiline">
    {allProducts
    .map((ele : IProduct, i) => {
    return (
    <div className="column is-3" key={i}> <Product item={ele}/> </div>)})}
  </div>
  </div>
  </div>
)}
