import React, { useState } from "react";

export const ProductForm = () => {
    const [prodDraft, setProdDraft] = useState({
        name: "",
        imgurl: [""],
        qty: 0,
        cost: 0.0
    });

  const handleFormSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(prodDraft);
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
                  onChange={(e) => {prodDraft.name = e.target.value}}
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
                  onChange={(e) => { prodDraft.imgurl = [e.target.value]}}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Cost of Product</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Input price e.g. 9.99"
                  onChange={(e) => {prodDraft.cost = Number.parseInt(e.target.value)}}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Quantity</label>
              <div className="control">
              <input className="input" type="number" min={0}
            onChange={(e) => { prodDraft.qty = Number.parseInt(e.target.value)}}></input>
              </div>
            </div>

            <div className="field is-grouped is-grouped-right ">
              <div className="control">
                <button className="button is-link is-light">Preview</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Save</button>
              </div>
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
        <section className="hero">
          <div className="hero-body"></div>
          {/* <EclassName item={{...classDraft, enrollmentNum:0}}/> */}
        </section>
      </div>
    </>
  );
};
