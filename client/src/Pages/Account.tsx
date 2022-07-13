import axios from "axios";
import { BaseSyntheticEvent, ReactHTML, useState } from "react";

interface IUser {
  firstname: string,
  lastname: string,
  username: string,
  password: string,
  email?: string,
  role: string
}


//Account creation/Login Page
export const Account = () => {
  const [state, setState] = useState("login");
  const [userObj, setUserObj] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    role: ""
  } as IUser);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(userObj.role === ""){
      userObj.role = "CONSUMER";
      setUserObj(userObj);
    } 
    axios.post("/api/user", userObj).then((res) => {
      alert("Account Creation Succes, Try Logging in!");
      setState("login");
    }).catch(err => {
      alert("Account Creation Failed! Please try again!");
    });
  };
  const handleLogin = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userObj);
    //JWT + redirect to main
  };

  if (state === "create") {
    return (
      <div className="columns is-centered">
      <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="columns is-centered is-vcentered">
          <div className="field">
            <label className="label">Hi There, You are:</label>
            <div className="control">
              <div className="select">
                <select 
                onChange={e => userObj.role = e.currentTarget.value}>
                  <option value="CONSUMER">A User</option>
                  <option value="INSTRUCTOR">An Instructor</option>
                </select>
              </div>
            </div>
          </div>
        </div>

          <div className="columns is-centered is-vcentered">
            <div className="column is-narrow">
            <div className="field">
              <div className="control">
              <label className="label">First Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  onChange = {(e) => userObj.firstname = e.target.value}
                  required = {true}
                />
              </div>
            </div>
            </div>

            <div className="column is-narrow">
            <div className="field">
              <div className="control">
              <label className="label">Last Name</label>
                <input
                  className="input "
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  required
                  onChange = {(e) => userObj.lastname = e.target.value}
                />
              </div>
            </div>
            </div>
          </div>

        <div className="field">
          <label className="label">Your Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Enter email here" required
            onChange = {(e) => userObj.email = e.target.value}/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Desired Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Enter username" required
            onChange = {(e) => userObj.username = e.target.value}/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="password" required
            onChange = {(e) => userObj.password = e.target.value}/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="tandc">
              <input type="checkbox" /> I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit"
              className="button is-link is-rounded">
              Create my account!
            </button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light is-rounded"
              onClick={() => setState("login")}
            >
              I already have an account!
            </button>
          </div>
        </div>
        </div>
      </form>
      </div>
    );
  }

  else return (
    <form onSubmit={handleLogin}>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Username" onChange = {(e) => userObj.username = e.target.value}
            required/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="password"
            onChange={e => userObj.password = e.target.value} required/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
        </div>
        </div>

        <div className="columns is-centered">
        <div className="field is-grouped">
          <div className="control">
            <button type="submit"
              className="button is-link is-rounded">
              Login
            </button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light is-rounded"
              onClick={() => setState("create")}
            >
              Sign Up
            </button>
          </div>
          </div>
        </div>
        </div>
    </form>
  )
};