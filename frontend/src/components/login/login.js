import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./login.css"
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [ user, setUser] = useState({
        email: "",
        password:"",
    })
    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        const {email, password} = user
        if( email && password ){
            axios.post("http://localhost:5000/login", user)
            .then( res => alert(res.data.message))
            navigate("/home");
            console.log("user", user)
        } else{
            alert("invalid input");
        }
    }
    const register =() => {
        navigate("/signup");
    }
  return (
    <div className='bg'>
    <div className="login">
        <h1 className='heading'>Login</h1>
        <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <div className="button" onClick={login}>Login</div>
        <div>OR</div>
        <div className="button" onClick={register}>Register</div>
    </div>
    </div>
  )
}

export default Login