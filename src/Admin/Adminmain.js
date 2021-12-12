import React from "react";
import {useLocation} from 'react-router-dom';
import './Adminmain.css';


function Adminmain (){


    const location = useLocation();
    const id = location.state && location.state.id;
    let students =[{id:1,name:'Ebad',contact:'0312224234' , Address:'nowhere'}]

    return(<div>
        <div class="button-class">
        <button> ADD STUDENT </button>
        <button> ADD TEACHER </button>
        <button> CREATE COURSE </button>
        <button>  ASSIGN TEACHER </button>
        </div>
        <div class='table'>
        <table>
            <tr>
                <th class="table-head"> Student ID </th>
                <th class="table-head"> Student Name  </th>
                <th class="table-head"> Address  </th>
                <th class="table-head"> contact  </th>
                <th class="table-head"> Edit/delete  </th>

            </tr>
              {students.map((item =>
                
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