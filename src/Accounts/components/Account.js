import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../Styles/Login.css";
import { useState } from "react";
import { useCookies } from "react-cookie";
import  login from "Accounts/helper/LoginAPI";
import register from "Accounts/helper/RegisterAPI";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies("");
  
  const data = {
    email: email,
    password: password,
  };
  const loginData = {
    username: email,
    password: password,
  };

  // useEffect(() => {
  //   if(cookies.token){
  //     history.replace("/");
  //   }
  // })

  

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
          <button className="login__signInButton" type="submit" onClick={(e)=>{
              login(e,setCookies,removeCookies,history,loginData);
          }} >
            Sign In
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login__registerButton" type="submit" onClick = {(e)=>{
            register(e,loginData,data,setCookies,removeCookies,history)
          }}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
