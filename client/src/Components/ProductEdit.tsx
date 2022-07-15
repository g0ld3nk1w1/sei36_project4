import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "./ProductCard";

export const ProductEdit = () => {
    const {id} = useParams();
    const nav = useNavigate();

    useEffect(() => {
          axios.post("/product/search", {
              id: id,
            })
            .then((res) => setProdDraft(res.data.product as IProduct))
            .catch((err) => alert("Product not found!"));

            console.log("triggered")
        },[])

    const [prodDraft, setProdDraft] = useState({} as IProduct);
    
    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.put("/product", {
            id: prodDraft._id,
            qty: prodDraft.qty,
            cost: prodDraft.qty
        }).then((res) => {alert("Success!"); nav(`/product/${prodDraft._id}`)})
        .catch((err) => alert("Could not update product!"))
    }

    return (
        <>
          <div className="column">
            <section className="hero box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name of Product</label>
                  <div className="control">
                  <input
                      className="input"
                      type="text"
                      onChange={(e) => {prodDraft.name = e.target.value}}
                      defaultValue={prodDraft.name}
                    />
                  </div>
                </div>
    
                <div className="field">
                  <label className="label">URL Image of Product</label>
                  <div className="control">
                  <input
                      className="input"
                      type="text"
                      onChange={(e) => { prodDraft.imgurl = [e.target.value]}}
                      defaultValue={prodDraft.imgurl}
                      disabled
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Cost of Product</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number" step={0.01}
                      onChange={(e) => {prodDraft.cost = parseFloat(e.target.value)}}
                      defaultValue={prodDraft?.cost}
                    />
                  </div>
                </div>
    
                <div className="field">
                  <label className="label">Quantity</label>
                  <div className="control">
                  <input className="input" type="number" min={0}
                onChange={(e) => { prodDraft.qty = Number.parseInt(e.target.value)}}
                defaultValue={prodDraft?.qty}></input>
                  </div>
                </div>
    
                <div className="field is-grouped is-grouped-right ">
                  <div className="control">
                    <button type="submit" className="button is-link is-light">
                      Publish
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
          </>
    )
}