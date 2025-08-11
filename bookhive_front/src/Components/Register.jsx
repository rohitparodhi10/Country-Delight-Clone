import React, { useState } from 'react';
import api from '../api';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [success, setSuccess]=useState(false);
    const [error, setError]=useState(false);
    const navigate=useNavigate();
    const [minimumLoadingTime]=useState(2000);
    const startTime=Date.now();

    const handleRegister=async(e)=>{
        e.preventDefault()
        setSuccess('')
        setError('')

        try{
            const response=await api.post('accounts/register/',{
                email:email,
                password:password,
            })
            const requestTime=Date.now()-startTime;
            const waitTime=Math.max(minimumLoadingTime-requestTime, 0)
            setSuccess("Registration Successful!")
            setTimeout(()=>{
                navigate('/login')
            }, waitTime)

        }catch(error){
            setError(true);
            alert("Registration Failed!", + (error.response?.data?.detail || error.message))
        }
    }
  return (
    <>
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleRegister}>
                <input 
                type="email"
                placeholder='provide your Email address'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required />

                <input 
                type="password"
                placeholder='provide your password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required />

                <button type="submit">Register</button>
            </form>
            {success && <p>Registration Successfully Saved!</p>}
            {error && <p>{error}</p>}
        </div>
    </>
  )
}

export default Register;