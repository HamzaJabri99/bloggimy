import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Sign in</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <div className="buttonHandler">
          <button>Login</button> <br />
          <p>Something went wrong</p>
          <span>
            Don't You Have an account? <Link to={"/register"}>Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
