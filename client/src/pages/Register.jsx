import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="auth">
      <h1>Create your Account </h1>
      <form>
        <input
          type="text"
          placeholder="username"
          required
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          required
          name="password"
          onChange={handleChange}
        />
        <div className="buttonHandler">
          <button onClick={handleSubmit}>Register</button> <br />
          {error && <p>{error}</p>}
          <span>
            Do You Have an account? <Link to={"/login"}>Sign in</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
