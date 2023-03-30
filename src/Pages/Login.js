import React, {useContext, useEffect, useState} from 'react'
import "../Styles/Login.css"
import Context from '../Components/Context';
import { useNavigate } from 'react-router';
import {loginUser} from "../Services/AxiosService";

const Login = () => {

    const context = useContext(Context);
    const token = context.token;
    const setToken = context.setToken;
    const navigate = useNavigate();

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    useEffect(()=>{

    },[]);

    const doLogin = ()=>{
        // API call for login
        loginUser(username, password).then(res => {
            const token = res.data.token;
            localStorage.setItem("token",token);
            setToken(token);
            navigate("/");
        }).catch(res => {
            doLogout();
        });
    }

    const doLogout = () =>{
        // todo add API call for logout
        localStorage.setItem("token","");
        setToken("");
        navigate("/");
    }

    return (
        <div>
            <div className='login-wrapper'>
                {token ?
                    <div className='login-container'>
                        <h1 className='login-heading'>Logout</h1>
                        <button className='logout-btn' onClick={()=>doLogout()}>Logout</button>
                    </div>
                :
                    <div className='login-container'>
                        <h1 className='login-heading'>Login</h1>

                        <input type="text" placeholder="Username..." onChange={(event)=>setUsername(event.target.value)}></input>
                        <input type="text" placeholder="Password..." onChange={(event)=>setPassword(event.target.value)}></input>

                        <button className='login-btn' onClick={()=>doLogin()}>Login</button>
                    </div>}
            </div>
        </div>
    )
}

export default Login
