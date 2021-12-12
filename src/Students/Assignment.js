import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useState} from 'react';
import './Assignment.css';



function Assignment(props){
  const location=useLocation();
  let id,isloggedin;
  let corid = props.corid;
  if (props.id != null){
    id = props.id;
    isloggedin = location.state && location.state.isloggedin ;
    localStorage.setItem("id", String(id));
    }
else{
    
        id=localStorage.getItem("id");
 }
 
  let assignment=[{aid:1, corid:4 ,name:"python data",Due:'10/12/2021 23:55',desc:"some descccc"},{aid:2,corid:4,name:"LATEX",Due:'10/12/2021 23:55',desc:"some descccc"}, {aid:1 ,corid:5,name:"Database json/xml/subqueriess",Due:'10/12/2021 23:55',desc:"some descccc"}];
  const [aid,setaid]=useState();
  const navigate= useNavigate();
  let it ;
  const handleaid=()=>{
    setaid(it);
   navigate('/studentmain/content',{state:{aid:aid , id:id}});
            

  };

    return (<div class="ann">
    
    <table>
        <tr >
            <th class="table-head"> ASSIGNMENT </th>
            <th class="table-head"> NAME </th>
            <th class="table-head"> DUE DATE </th>

        </tr>
          {assignment.filter(t=>t.corid==corid).map((item =>
           
            <tr><td>{assignment.indexOf(item)+1}</td>
            <td> <button 
            onClick={()=>{
              it=item.aid;
              handleaid();}}
            >{item.name} </button></td>
                <td>{item.Due}</td>
          </tr> ))}
        </table>
       
    </div>
    )
;
}
export default Assignment;