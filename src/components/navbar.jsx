

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#/" className="navbar-logo">
        🥗 Recipe House
      </a>

      <div className="navbar-links">
        <a href="#/">Home</a>
        <a href="#/login">Login</a>
        <a href="#/register">Register</a>
        <a href="#/about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;

