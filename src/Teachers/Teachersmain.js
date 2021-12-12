import React from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import {useEffect ,useState} from 'react' ;

function Teachersmain (){
    const location = useLocation(); 
    const id = location.state && location.state.id ;
    return<h1>{id}</h1> ;

};
export default Teachersmain ;