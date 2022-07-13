
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./RoleContext";

export const NavBar = () => {
  const nav = useNavigate();
  const loggedIn = useContext(UserContext);
  return (
    <nav className="navbar block">
      <div className="navbar-brand">
        <div className="navbar-item"> Logo</div></div>
        <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable is-mega">
      <Link to="/" className="navbar-link">Browse</Link>
      <div className="navbar-dropdown"> 
      <Link to="/class" className="navbar-item">Class</Link>
      <Link to="/product" className="navbar-item">Products</Link>
      </div>
      </div>
      </div>
      <p className="title is-3">FUN LEARNING WITH KIDS</p>
      <div className="navbar-end">
      {!loggedIn ?
      (<button className="navbar-item button is-primary" onClick={() => { nav("/login")}}>Login / Sign Up</button>) :
      (<div className="navbar-item has-dropdown is-hoverable is-mega">
      <button className="navbar-item button is-primary">Profile </button>
      <div className="navbar-dropdown"> 
      <Link to="/" className="navbar-item">Orders</Link>
      <Link to="/" className="navbar-item">Logout</Link>
      </div>
      </div>)}
      </div>
      
    </nav>
  );
};
