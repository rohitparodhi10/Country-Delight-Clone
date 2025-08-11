import React, { useState } from 'react';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../Constants';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';

function Login() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [success, setSuccess]=useState(false);
    const [error, setError]=useState(false);
    const navigate=useNavigate();

    const handleLogin=async(e)=>{
        e.preventDefault()
        setError("")
        setSuccess("")

        try{
            const response=await api.post('accounts/token/', {
                email,
                password
            })

            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
            localStorage.setItem('email', email);

            setSuccess("Logged in Successfully")
            navigate('/home');
        }catch(error){
            setError("Login Failed, Please check your credentials")
        }
    }
  return (
    <>
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                type='email'
                placeholder='provide your email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required/>

                <input
                type="password"
                placeholder='provide your password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>

                <button type='submit'>Login</button>
            </form>

            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </div>
    </>
  )
}

export default Login;
