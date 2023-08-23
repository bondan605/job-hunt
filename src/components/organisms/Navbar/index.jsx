import React from "react";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-wrapper">
      <div className="nav-logo-link">
        <img
          className="logo-img"
          src="/images/Logo.png"
          alt="/images/Logo.png"
          onClick={() => navigate("/")}
        />
        <div>
          <Link className="nav-link" to="/find-jobs">
            Find Jobs
          </Link>
          <Link className="nav-link">Browse Companies</Link>
        </div>
      </div>
      <div className="auth">
        <Button
          className="btn-link"
          type="link"
          onClick={() => navigate("/signin")}
        >
          Login
        </Button>
        <Button type="primary" onClick={() => navigate("/signup")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
