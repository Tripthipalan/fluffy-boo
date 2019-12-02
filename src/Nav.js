import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Nav() {
	const navStyle = {
		color:'white'
	}
  return (
    <nav >
      <h3>TRIPTHI PALAN</h3>
	  <ul className= "nav-links">
	  <Link style={navStyle} to="/home">
			<li>Home</li>
		</Link>
		<Link style={navStyle} to="/about">
			<li>About</li>
		</Link>
		<Link style={navStyle} to="/contact">
			<li>Contact</li>
		</Link>
		<Link style={navStyle} to="/resume">
			<li>Resume</li>
		</Link>
		
	  </ul>
    </nav>
	
  );
}

export default Nav;
