import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        credentials
      );
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          required
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          required
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
