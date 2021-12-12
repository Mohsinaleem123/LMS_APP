import React , { useEffect, useReducer, useState }from "react";
import "./Login.css" ;
import {useNavigate} from 'react-router-dom';
import {useAlert}  from 'react-alert';



function Login() {
    const[info , setinfo]= useState({id:"",password:""});
    const navigate=useNavigate();
    const alert = useAlert();
    let name ,value;
    let isloggedin;
    ;
    const HandleInput = (e)=>{
        name=e.target.name;
       value=e.target.value;
    setinfo({...info,[name]:value});
    };

    const Studenthandle =(e)=>{
        if((info.id=='18626')  && (info.password=='password')){
        isloggedin=true;

        navigate('/Studentmain' ,{state:{id:info.id , isloggedin:isloggedin},replace:true});}
        else{
            alert.show('invalid id or password');
        }
    };
    const teacherhandle =(e)=>{
        if((info.id=='teacher')  && (info.password=='password')){
        isloggedin=true;
        navigate('/Teachersmain',{state:{id:info.id , isloggedin:isloggedin},replace:true});
        }
    };
    const Adminhandle =(e)=>{
        if((info.id=='admin')  && (info.password=='password')){
        isloggedin=true;
        navigate('/Adminmain',{state:{id:info.id , isloggedin:isloggedin},replace:true});
        }
        else{
            alert.show('invalid id or password');
        }
    };

    return ( 
    <div className="Login">
    <h1>LOGIN</h1>
    <div className="det">
    <span class="details"> ID<br/>
    <input type='text' name="id" value={info.id} onChange={HandleInput}></input></span>
    <span class="details"> password <br/>
    <input type='password' name="password"  value={info.password} onChange={HandleInput}></input></span>
    
    </div>
    <div className="button-set">
    <button type="button" onClick={Studenthandle}>STUDENT</button>
    <button type="button" onClick={teacherhandle}>TEACHER</button>
    <button type="button" onClick={Adminhandle}>ADMIN</button>
    </div>

    </div>

    );
};
export default Login;
