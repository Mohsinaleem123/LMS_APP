
import './App.css';
import React, { useEffect, useReducer, useState } from "react";
import axios, { Axios } from 'axios';
import {Route ,Routes, Link, useNavigate} from 'react-router-dom';
import About from "./About.js";
import Login from "./Login.js";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Main from "./Main.js";
import Studentmain from "./Students/Studentmain";
import Teachersmain from './Teachers/Teachersmain';
import Adminmain from './Admin/Adminmain';
import Announcements from './Students/Announcements.js';
import Quizes from './Students/Quizes.js';
import Lectures from './Students/Termrep';
import Quizt from './Students/Quiz.js';
import Assignment from './Students/Assignment';
import Content from './Students/Content.js';
import Addstudent from './Admin/Addstudent';
import Tabledisplay from './Admin/Tabledisplay';
function App() {
 

    return(
    <div className="App" bg-color="white">
      
       <Routes>
       <Route path="/*" element={<Main/>} />
       <Route path="/Studentmain/*" element={<Studentmain/>}>
         <Route path='announcements' element={<Announcements/>}/>
         <Route path='quizes/*' element={<Quizes/>}>
         <Route path='Quiz' element={<Quizt/>}/> 
         </Route>
         <Route path='assignment' element={<Assignment/>}/>
        <Route path='lectures' element={<Lectures/>}/>
        <Route path='content' element={<Content/>} />
       </Route>
       <Route path="/Teachersmain" element={<Teachersmain/>}>
         </Route> 
       <Route path="/Adminmain/*" element={<Adminmain/>}>
         <Route path="addstudent" element={<Addstudent/>}/>
         <Route path="tabledisplay" element={<Tabledisplay/>} />
       
       </Route>
      
       </Routes>  


     
        
    </div>
    );
};

export default App ;
