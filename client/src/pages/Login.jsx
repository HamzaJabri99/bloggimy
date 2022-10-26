import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);
  console.log(user);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Sign in</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <div className="buttonHandler">
          <button onClick={handleSubmit}>Login</button> <br />
          {error && <p>{error}</p>}
          <span>
            Don't You Have an account? <Link to={"/register"}>Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
