import React from "react";
import  './Display.css';
import { useLocation } from "react-router-dom";

function Display(){
 let path;
  const location=useLocation();

   let id = location.state.id ;
   

return(
  <div class="vertical-menu">
  <a href="" class="active">{id}</a>
  <a href="/Studentmain/announcements">ANNOUNCEMENTS</a>
  <a href="/Studentmain/quizes">QUIZES</a>
  <a href="/Studentmain/assignment">ASSIGNMENT</a>
  <a href="/Studentmain/report">TERM REPORT</a>
</div>
);
}
export default Display;