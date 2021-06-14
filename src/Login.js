import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useState, useEffect } from "react";
import backendAPI from "./axios";
import { useStateValue } from "./StateProvider";
import { initialState } from "./reducer";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const data = {
    email: email,
    password: password,
  };
  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   if (email) {
  //     dispatch({
  //       type: "SET_USER",
  //       user: email,
  //     });
  //   } else {
  //     dispatch({
  //       type: "SET_USER",
  //       user: null,
  //     });
  //   }
  // },[email]);
  const login = async (e) => {
    e.preventDefault();
    backendAPI.post("/accounts/login/", data).then((response) => {
      if (response.data.status === 200) {
        initialState.user = email;
        console.log(response);
        history.replace("/");
      } else if (response.data.status === 404) {
        alert("Invaild creditianls");
      }
    });
  };
  const register = async (e) => {
    e.preventDefault();

    backendAPI.post("/accounts/create/", data).then((response) => {
      if (response.data.status === 201) {
        initialState.user = email;
        history.replace("/");
      } else if (response.data.status === 400) {
        alert("Account already exist");
      }
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" type="submit" onClick={login}>
            Sign In
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login__registerButton" onClick={register} type="submit">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
