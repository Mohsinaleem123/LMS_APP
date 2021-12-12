import React from "react";
import About from "./About.js";
import Login from "./Login.js";
import "./Main.css";
import Contact from "./Contact.js";
import Header from "./Header.js";
import {Route ,Routes, useNavigate} from 'react-router-dom';
import Adminmain from "./Admin/Adminmain.js";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Container,Item } from 'react-bootstrap';
function Main(){

    return ( 
    <div className="Main">
    <Header />
    <Routes>    
     <Route path="/about" element={<About/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    </div>         
              );
    
    
    }
        ;
    
    export default Main ; 