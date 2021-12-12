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
       localStorage.setItem("isloggedin", String(isloggedin));
       navigate('./studentmain',{state:{id:null,isloggedin:false}})
       
     }
     
if (isloggedin==false){

      return<p>some text</p> }
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
      <a href="" class="active">{user.name} <button onClick={logout()}> LOGOUT</button></a>
      <a href="/Studentmain/announcements">ANNOUNCEMENTS</a>
      <a href="/Studentmain/quizes">QUIZES</a>
      <a href="/Studentmain/assignment">ASSIGNMENT</a>
      <a href="/Studentmain/lectures">LECTURES</a>
      <a>{isloggedin.toString()}</a>
     </div>
    
       <div class="compon">
        <Routes>
        <Route path='/announcements' element={<Announcements corid={corid}/>}/>
        <Route path='/quizes/*' element={<Quizes corid={corid}/>}>
        <Route path='Quiz' element={<Quizt corid={corid}/>} />
        </Route>
        <Route path='/assignment' element={<Assignment corid={corid} />}/>
        <Route path='/content' element={<Content/>} />
        <Route path='/lecture' element={<Lectures id={id}/>}/>



        
        </Routes>
       
        </div>
        
    
    </div>) ;


 

};
export default Studentmain ;