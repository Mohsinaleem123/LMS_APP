
import React from "react";
import {useLocation} from "react-router-dom";
 function Content(){
     const location=useLocation();
     let aid=location.state && location.state.aid;
     let isloggedin= location.state && location.state.isloggedin ;
     
     return(
         <div>
         <p>SUBMIT YOUR FILE
             In this assignment you have to do all things that i didn't taught
         </p>
         <input type="file" name="filein "/>
        
         </div>
     );
 }
 export default Content;