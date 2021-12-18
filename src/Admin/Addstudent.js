import React from "react";
import "./Addstudent.css";

function Addstudent(){


    return (<div>
        <div class="input-show">
         <a> ENTER ID
        <input type="text" /> </a>
        <a> ENTER Name
        <input type="text" /> </a>
        <a> ENTER Adress
        <input type="text" /> </a>
        <a> ENTER Contact
        <input type="text" /> </a>
        </div>
        <div class="button-cla">
        <button> Student</button>
        <button> Teacher</button>
        </div>
    </div>);
}

export default Addstudent;