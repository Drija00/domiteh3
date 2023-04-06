import React, {useContext, useEffect, useState} from 'react'
import "../Styles/Login.css"
import Context from '../Components/Context';
import { useNavigate } from 'react-router';
import {loginUser} from "../Services/AxiosService";

const Login = () => {

    const context = useContext(Context);
<<<<<<< HEAD
    const user = context.user;
    const setUser = context.setUser;
=======
    const token = context.token;
    const setToken = context.setToken;
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
    const navigate = useNavigate();

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    useEffect(()=>{

    },[]);

    const doLogin = ()=>{
        // API call for login
        loginUser(username, password).then(res => {
<<<<<<< HEAD
            console.log(res.data);
            const user = res.data;
            console.log(user.role,"   user");
            localStorage.setItem("user",user);
            setUser(user);
            navigate("/home");
=======
            const token = res.data.token;
            localStorage.setItem("token",token);
            setToken(token);
            navigate("/");
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
        }).catch(res => {
            doLogout();
        });
    }

    const doLogout = () =>{
        // todo add API call for logout
<<<<<<< HEAD
        localStorage.setItem("user","");
        setUser("");
        navigate("/login");
=======
        localStorage.setItem("token","");
        setToken("");
        navigate("/");
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
    }

    return (
        <div>
            <div className='login-wrapper'>
<<<<<<< HEAD
                {user ?
=======
                {token ?
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
                    <div className='login-container'>
                        <h1 className='login-heading'>Logout</h1>
                        <button className='logout-btn' onClick={()=>doLogout()}>Logout</button>
                    </div>
                :
                    <div className='login-container'>
                        <h1 className='login-heading'>Login</h1>

<<<<<<< HEAD
                        <input type="text" placeholder="Username..." id="email" onChange={(event)=>setUsername(event.target.value)}></input>
                        <input type="text" placeholder="Password..." id="password" onChange={(event)=>setPassword(event.target.value)}></input>

                        <button className='login-btn' id="btn" onClick={()=>doLogin()}>Login</button>
=======
                        <input type="text" placeholder="Username..." onChange={(event)=>setUsername(event.target.value)}></input>
                        <input type="text" placeholder="Password..." onChange={(event)=>setPassword(event.target.value)}></input>

                        <button className='login-btn' onClick={()=>doLogin()}>Login</button>
>>>>>>> f90940af3012a974c02f63d51e0a1f6a264bbf7d
                    </div>}
            </div>
        </div>
    )
}

export default Login
