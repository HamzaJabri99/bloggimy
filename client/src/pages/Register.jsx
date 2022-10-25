import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Create your Account </h1>
      <form action="">
        <input type="text" placeholder="username" required />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <div className="buttonHandler">
          <button>Register</button> <br />
          <p>Something went wrong</p>
          <span>
            Do You Have an account? <Link to={"/login"}>Sign in</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
