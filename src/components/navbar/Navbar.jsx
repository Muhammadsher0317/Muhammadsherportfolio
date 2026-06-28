import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Link bosilganda menyu o'zi yopilib ketishi uchun
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="container">
        <h1 className="nav-logo">Inomov<span>.dev</span></h1>
        
        {/* isOpen true bo'lsa 'active' klassi qo'shiladi */}
        <ul className={`links ${isOpen ? "active" : ""}`}>
          <li><NavLink to="/" onClick={closeMenu}>Bosh Sahifa</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Loyihalar</NavLink></li>
          <li><NavLink to="/skills" onClick={closeMenu}>Ko'nikmalar</NavLink></li>
          <li><NavLink to="/boglanishla" onClick={closeMenu}>Bog'lanish</NavLink></li>
        </ul>

        <div className="nav-actions">
          <div className="navbutti">
            <a href="/resume.pdf" download="Muhammadsher_Inomov_Resume.pdf">
              <button>Resume</button>
            </a>
          </div>

          {/* Mobil qurilmalar uchun Menu Tugmasi */}
          <button className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;