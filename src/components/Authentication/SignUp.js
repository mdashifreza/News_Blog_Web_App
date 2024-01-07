import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    const [credentials, setCredentials] = useState({
        username : '',
        email: '',
        password: '',
    });
    const handleInput = (e)=>{
        const { name, value } = e.target;
        setCredentials((prev)=>({
            ...prev,
            [name] : value,
        }))
    }

    const navigate = useNavigate();
    const handleSignUp = async ()=>{
        try{
            const url = "https://impresario-global-backend.vercel.app/api/sign-up"
            const response = await axios.post(url, credentials);
            navigate("/sign-in")
            console.log("Sign-Up succesfully:", response.data);
        }catch(error){
            console.log("error found during Sign-Up", error.message)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-red-500">
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded shadow-md mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
                style={{ top: '140px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                <p>Welcome News Blogs community!</p>
                <input
                    type="text"
                    placeholder='Username' 
                    className='w-full bg-gray-300 m-1 rounded placeholder: p-3'
                    name="username"
                    value={credentials.username}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    placeholder='Email' 
                    className='w-full bg-gray-300 m-1 rounded placeholder: p-3'
                    name="email"
                    value={credentials.email}
                    onChange={handleInput}
                />
                <input type="text" 
                    placeholder='Password' 
                    className='w-full bg-gray-300 m-1 rounded placeholder: p-3'
                    name="password"
                    value={credentials.password}
                    onChange={handleInput}
                />
                <div className='flex justify-between w-full text-sm p-1'>
                        <h1>Remember me</h1>
                        <h1>Forgot password?</h1>
                </div>
                <button className='bg-red-500 rounded font-semibold w-full p-2 text-white'
                onClick={handleSignUp}
                >Sign Up</button>
                <p className='mt-5'>Already have an account? <Link to = "/sign-in"><span className='text-red-700'>SignIn</span></Link></p>
            </div>
        </div>
    );
}
