import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

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
      <button>Login</button>
    </div>
  );
};

export default Login;
