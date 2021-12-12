import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import './Adminmain.css';


function Adminmain (){


    const location = useLocation();
    const id = location.state && location.state.id;
    let [tableshow,settableshow]=useState([]); 
    let k='';
    let students =[{id:1,name:'Ebad',contact:'0312224234' , Address:'nowhere'},{id:2,name:'Ebad',contact:'0312224234' , Address:'nowhere'},{id:3,name:'Ebad',contact:'0312224234' , Address:'nowhere'}]
    let teachers =[{id:1,name:'MS NAFEESA',contact:'0312224234' , Address:'nowhere'}]
    const Showt=()=>{
      settableshow(teachers)
      k='Teacher';
    }
    const showS =()=>{
      settableshow(students)
      k='Student';
    }

    return(<div>
        <div class="button-class">
        <button onClick={showS}>  SHOW STUDENT </button>
        <button onClick={Showt}>  SHOW TEACHER </button>
        <button> ADD STUDENT </button>
        <button> ADD TEACHER </button>
        <button> CREATE COURSE </button>
        <button>  ASSIGN TEACHER </button>
        
        </div>
        <div class='table'>
        <table>
            <tr>
                <th class="table-head"> {k} ID </th>
                <th class="table-head"> {k} Name  </th>
                <th class="table-head"> Address  </th>
                <th class="table-head"> contact  </th>
                <th class="table-head"> Edit/delete  </th>

            </tr>
              {tableshow.map((item =>
                
                <tr><td>{item.id}</td>
                    <td> {item.name} </td>
                    <td> {item.contact}</td>
                    <td>{item.Address}</td>
                    <td><button>Edit</button>
                      <button>Delete</button></td>
              </tr> ))}
            </table>
        </div>
    </div>)
     ;

};
export default Adminmain ;