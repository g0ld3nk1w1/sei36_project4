import axios from "axios";
import React, {BaseSyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "./ProductCard";

export const ProductForm = () => {
    const [prodDraft, setProdDraft] = useState({
        name: "",
        imgurl: [""],
        qty: 0,
        cost: 0.0
    });
    const [preview, setPreview] = useState(false);
    const nav = useNavigate();

  const handleFormSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(prodDraft)
    axios.post("/product",{
      ...prodDraft,
      isDisplayed: true
    }).then( res => {alert("Created!"); nav("/product")})
    .catch(err => alert("Failed to create product!"));
  }

  const handlePreview = (event: React.MouseEvent) =>{
    event.preventDefault();
    setPreview(true);
  }

  const resetPreview = (event: BaseSyntheticEvent) =>{
    event.preventDefault();
    setPreview(false)
  }
  return (
    <>
      <div className="column">
        <section className="hero box">
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <label className="label">Name of Product</label>
              <div className="control">
              <input
                  className="input"
                  type="text"
                  placeholder="Unique Product Name"
                  onChange={(e) => {prodDraft.name = e.target.value; resetPreview(e)}}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">URL Image of Product</label>
              <div className="control">
              <input
                  className="input"
                  type="text"
                  placeholder="Input link to hosted image here"
                  onChange={(e) => { prodDraft.imgurl = [e.target.value]; resetPreview(e)}}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Cost of Product</label>
              <div className="control">
                <input
                  className="input"
                  type="number" step={0.01}
                  placeholder="Input price e.g. 9.99"
                  onChange={(e) => {prodDraft.cost = parseFloat(e.target.value);resetPreview(e)}}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Quantity</label>
              <div className="control">
              <input className="input" type="number" min={0}
            onChange={(e) => { prodDraft.qty = Number.parseInt(e.target.value);resetPreview(e)}}></input>
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
          {preview ? <Product item={{...prodDraft, _id:"123"}}/>: ""}
          </div>
      </div>
    </>
  );
};
