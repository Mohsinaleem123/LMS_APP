import React from "react";
import Quizt from './Quiz';
import { Routes } from "react-router";

import { Route } from "react-router-dom";
import './Quizes.css';
 function Quizes(){
    let Qui=['Quiz1','Quiz2','Quiz3','Quiz4']
    return (
    <div>
   
    <a href='/Studentmain/quizes/Quiz'> Quiz 1</a>
    <div class="Quiz">
       
    <Routes>
       <Route path='Quiz' element={<Quizt/>} />
    </Routes>
    </div>
    
    
    </div>
    );
 };
 export default Quizes;