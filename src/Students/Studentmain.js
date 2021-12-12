import React from "react";
import { useLocation } from "react-router-dom";
import Display from './Display';
import './Studentmain.css';
import Quizes from "./Quizes";

import Quizt from './Quiz.js';
import Assignment from "./Assignment";
import Lectures from "./Termrep"
/*
       {courses.map((item =>
       <tr><td>{item.corid}</td>
           <td>{item.name}</td>
       </tr>
                  ))}
     </table> */

import {Route ,Routes, useNavigate} from 'react-router-dom';
import Announcements from "./Announcements";
import { useEffect, useState } from "react";
import Content from "./Content.js";
import Login from "../Login";
function Studentmain (){
  const navigate =useNavigate();
    let [id,setid]=useState();
    let [name,setname]=useState();
    let [corid,setcorid]=useState() ;
    let[isloggedin,setisloggedin]=useState();
    let it;
    let courses =[{corid:1,name:'Calculus'},{corid:2,name:'Intro to Programming'},{corid:3,name:'Computing'},{corid:4,name:'Pak Studies'},{corid:5,name:'Islamiat'}]
    const location = useLocation();

    if (location.state != null){
        id = location.state && location.state.id;
        isloggedin=location.state && location.state.isloggedin;
        
        
            localStorage.setItem("id", String(id));
            localStorage.setItem("isloggedin", String(isloggedin));
          
           
    }
    else{
        
            id=localStorage.getItem("id");
            isloggedin=localStorage.getItem("isloggedin");
     }
     let user ={id:id,name:'MOHSIN'}
     
     const handlecorid =()=>{
        setcorid(it);
     }
     const logout=()=> {
       isloggedin=false;
       
       navigate('./Studentmain',{state:{id:null,isloggedin:false}})
       
     }
   if(isloggedin==false){
     return<p>Login to continue</p>
   }  
return(
    <div>
      <nav className="NAB-BAR"> 
        <ul>
        {courses.map((item =>
           <li><button onClick={()=>{it=item.corid;
            handlecorid();
          }}> {item.name}</button></li>       
           
           ))}
        </ul>
      </nav>
      
      
      

       <div class="vertical-menu">
      <a href="" class="active">{user.name} <button onClick={logout}> LOGOUT</button></a>
      <a href="/Studentmain/announcements">ANNOUNCEMENTS</a>
      <a href="/Studentmain/quizes">QUIZES</a>
      <a href="/Studentmain/assignment">ASSIGNMENT</a>
      <a href="/Studentmain/lectures">LECTURES</a>
      <a>ATTENDANCE</a>
     </div>
    
       <div class="compon">
        <Routes>
        <Route path='/announcements' element={<Announcements corid={corid} isloggedin={isloggedin}/>}/>
        <Route path='/quizes/*' element={<Quizes corid={corid} isloggedin={isloggedin}/>}>
        <Route path='Quiz' element={<Quizt corid={corid} isloggedin={isloggedin}/>} />
        </Route>
        <Route path='/assignment' element={<Assignment corid={corid} isloggedin={isloggedin} />}/>
        <Route path='/content' element={<Content isloggedin={isloggedin}/> } />
        <Route path='/lecture' element={<Lectures id={id} isloggedin={isloggedin}/>}/>



        
        </Routes>
       
        </div>
        
    
    </div>) ;


 

};
export default Studentmain ;