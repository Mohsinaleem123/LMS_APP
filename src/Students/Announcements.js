import React from "react";
import './Announcements.css';
import {useLocation} from 'react-router-dom';


function Announcements(props){
    const location = useLocation();
    let Announcements=[{corid:1 ,desc:'Assignment that takes 2 month but you have one week'},{corid:1,desc:'something important'},{corid:4,desc:'there is a new assignment Could not find a declaration file for module react-quiz-componentf:/REACT/basic-oper/node_modules/react-quiz-component/lib/Quiz.js implicitly has an type. Try `npm i --save-dev @types/react-quiz-component` if it exists or add a new declaration (.d.ts) file containing `declare module '},{corid:4,desc:'zooomlink for classss slide reading '},{corid:4,desc:'latex Assignment'}];
    let corid=props.corid;
    return(<div class="ann">
    
        <table>
            <tr>
                <th class="table-head"> ANOUNCEMENT </th>
                <th class="table-head"> DESCRIPTION </th>

            </tr>
              {Announcements.filter(t=>t.corid==corid).map((item =>
                
                <tr><td>{Announcements.indexOf(item)}</td>
                    <td> {item.desc} </td>
              </tr> ))}
            </table>
          <p>{corid}</p>
        
        </div>
        )
    ;
;}

export default Announcements;