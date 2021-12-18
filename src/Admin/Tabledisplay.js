import React from "react";
import { useState } from "react"; 
import { useLocation  } from "react-router-dom";


function Tabledisplay(){
    const location= useLocation();
    let [tableshow,settableshow] =useState();
    tableshow=[];
    tableshow =location.state && location.state.tablearray ;
    
    return(<div>
        <div class='table'>
        <table>
            <tr>
                <th class="table-head">  ID </th>
                <th class="table-head">  Name  </th>
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
}
;
export default Tabledisplay;