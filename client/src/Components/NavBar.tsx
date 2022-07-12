//Meant to be megamenu see if you can do it.

import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar block">
      <div className="navbar-brand">
        <div className="navbar-item"> Logo</div></div>
        <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable is-mega">
      <div className="navbar-link">Browse</div>
      <div className="navbar-dropdown"> 
      <Link to="/" className="navbar-item">Class</Link>
      <Link to="/" className="navbar-item">Products</Link>
      </div>
      </div>
      </div>
      <div className="navbar-end">
      <button className="navbar-item button is-primary">Login/Sign Up</button>
      <div className="navbar-item has-dropdown is-hoverable is-mega">
      <button className="navbar-item button is-primary">Profile </button>
      <div className="navbar-dropdown"> 
      <Link to="/" className="navbar-item">Orders</Link>
      <Link to="/" className="navbar-item">Logout</Link>
      </div>
      </div>
      </div>
      
    </nav>
  );
};
