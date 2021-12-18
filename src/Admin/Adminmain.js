import React, { useState } from "react";
import {useLocation ,useNavigate , Routes ,Route ,Outlet } from 'react-router-dom';
import Addstudent from "./Addstudent";
import './Adminmain.css';
import Tabledisplay from "./Tabledisplay";


function Adminmain (){


    const location = useLocation();
    const navigate =useNavigate();
    const id = location.state && location.state.id;
    let [tableshow,settableshow]=useState([]); 
    let k='';
    let students =[{id:1,name:'Ebad',contact:'0312224234' , Address:'nowhere'},{id:2,name:'Ebad',contact:'0312224234' , Address:'nowhere'},{id:3,name:'Ebad',contact:'0312224234' , Address:'nowhere'}]
    let teachers =[{id:1,name:'MS NAFEESA',contact:'0312224234' , Address:'nowhere'},{id:2,name:'MS NAFEESA',contact:'0312224234' , Address:'nowhere'}]
    const Showt=()=>{
      navigate('./tabledisplay',{state:{tablearray:teachers}});
    }
    const showS =()=>{
      navigate('./tabledisplay',{state:{tablearray:students}});
    }
    const Addst=()=>{
     navigate('./addstudent');
    }
  const Showcourse=()=>{

  }
 const logout=()=>{
  navigate('/main',{replace:true})
 }
    return(<div>
       
        <div class="button-class">
        <button onClick={showS}>  SHOW STUDENT </button>
        <button onClick={Showt}>  SHOW TEACHER </button>
        <button onClick={Addst}>  ADD Student/Teacher </button>
        <button onClick={Showcourse}>  Show Courses </button>
        <button>Add courses </button>
      
        <button onClick={logout}> LOGOUT </button>
       
        </div>
        <Routes>
        <Route path="/tabledisplay" element={<Tabledisplay />} />
          <Route path="/addstudent" element={<Addstudent/>}/>
          
          </Routes>
        
        
    </div>)
     ;

};
export default Adminmain ;