import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome user!</h1>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
