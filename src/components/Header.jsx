import React from "react";
import "../styles.css";

function Header() {
  const email = localStorage.getItem("email");

  return (
    <header className="header">
      <h1 className="header-title">Wings 🦋</h1>
      <p>Welcome Back, {email}</p>
    </header>
  );
}

export default Header;
