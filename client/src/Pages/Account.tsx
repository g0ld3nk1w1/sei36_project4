import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Account creation/Login Page
export const Account = () => {
  const nav = useNavigate();
  const [state, setState] = useState("login");

  const handleSubmit = () => {};
  const handleLogin = () => {;}

  if (state === "create") {
    return (
      <div className="columns is-centered">
      <form>
      <div className="container">
        <div className="columns is-centered is-vcentered">
          <div className="field">
            <label className="label">Hi There, You are:</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>A User</option>
                  <option>An Instructor</option>
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
                />
              </div>
            </div>
            </div>
          </div>

        <div className="field">
          <label className="label">Your Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Enter email here" />
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
            <input className="input" type="text" placeholder="Enter username" />
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
            <input className="input" type="password" />
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
            <button
              className="button is-link is-rounded"
              onClick={() => handleSubmit()}
            >
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
    <form>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Username" />
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
            <input className="input" type="password" />
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
            <button
              className="button is-link is-rounded"
              onClick={() => handleLogin()}
            >
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