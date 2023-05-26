import React,{useState} from 'react'
import "./signup.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [ user, setUser] = useState({
        name: "",
        email: "",
        dob:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const {name, email,dob, password, reEnterPassword} = user
        if( name && email &&dob && password && (password === reEnterPassword)){
            axios.post("http://localhost:5000/register", user)
            .then( res => alert(res.data.message))
            navigate("/login");
        } else{
            alert("invalid input")
        }
    }
    const login = () => {
        navigate("/login");
    }
    
  return (
    <div className="body"> 
    <div className="register">
        <h1 className="registerheading">Register</h1>
        <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange}></input>
        <input type="date" name="dob" value={user.dob} placeholder='Date Of Birth' onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>OR</div>
        <div className="button" onClick={login}>Login</div>
    </div>
    </div>
  )
}

export default Signup