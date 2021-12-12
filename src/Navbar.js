import React from "react";
import { useNavigate } from "react-router";
import Login from "./Login";


function Navbar() {
  const navigate=useNavigate();
  
    return (
      <nav>
        <ul className="navbar">
          
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
          
          
        </ul>
      </nav>
    );
  };

export default Navbar;