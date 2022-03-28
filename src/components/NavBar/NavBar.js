import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  const [isMobile, setMobile] = useState(false);

  return (
    <div className="navbar">

      <h3 className="logo">Beverley Johannie</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links" } onClick={() => setMobile(false)}>
        <NavLink exact to="/" className="home" activeClassName="active-link">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className="about" activeClassName="active-link">
          <li>About</li>
        </NavLink>
        <NavLink to="/projects" className="projects" activeClassName="active-link">
          <li>Projects</li>
        </NavLink>
        <NavLink to="/contact" className="contact" activeClassName="active-link">
          <li>Contact</li>
        </NavLink>
      </ul>

      <button className="mobile-view" onClick={() => setMobile(!isMobile)}>
        {isMobile ? 
        ( <i className="fas fa-times"></i> ) : 
        ( <i className="fas fa-bars"></i> ) }          
      </button>

    </div>
  );
    
}

export default NavBar;