// To be able to show either Class OR Product

import axios from "axios";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IClass } from "../Components/ClassCard";
import { IProduct } from "../Components/ProductCard";

interface IClassDate {
  startDate: string,
  endDate: string
}

// Take in a prop so that can do demo site for creation
export const DetailPage = (props: { toggle: string }) => {
  const { id } = useParams();
  const [display, setDisplay] = useState({} as any);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (props.toggle === "class") {
      axios.post("/class/search", {
          id: id,
        })
        .then((res) => {setDisplay(res.data.class as IClass); setReady(true);})
        .catch((err) => alert("Class not found!"));
    } else if (props.toggle === "product") {
      axios.post("/product/search", {id:id})
      .then(res => {setDisplay(res.data.product as IProduct); setReady(true);})
      .catch((err) => alert("Product not found!"));
    }
  }, []);

  const formatDate = (toChange: string) => {
    return format(parseISO(toChange), "PPp");
  };
  // console.log(display);

  if (props.toggle === "class" && ready)
    return (
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">{display?.name}</p>
            <div className="subtitle">
              <figure className="image">
                <img src={display?.images?.[0]} alt="image of class" />
              </figure>
            </div>
            <div className="content">
              <table>
                <thead>
                  <tr>
                    <th>Milestone</th>
                    <th>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Registration starts</td>
                    <td>{format(parseISO(display?.registrationDate), 'PPp')}</td>
                  </tr>
                  <tr>
                    <td>Registration close date</td>
                    <td>Sample date {display?.classDates[0].startDate.toString()}</td>
                  </tr>
                  <tr>
                    <td>
                      Class dates sadfs
                    </td>
                    <td> Button, showing modal of tabulated dates?</td>
                  </tr>
                </tbody>
              </table>
              <p> Instructor Information: {display.cost}</p>
              <p> t and c Information: {display.conditions}</p>
            </div>
          </div>
        </div>
      </section>
    );
  else if (props.toggle === "product" && ready)
    return (
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">{display?.name}</p>
            <div className="subtitle">
              <figure className="image is-2by1">
                <img src={display?.imgurl?.[0]} alt="image of class" />
              </figure>
            </div>
            <section className="section">
              <p>qty: {display.qty}</p>
              <p>cost: ${display.cost}</p>
            </section>
          </div>
        </div>
      </section>
    ); else return (<p>Loading...</p>)
};
