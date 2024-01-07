import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { tokenData } from '../../store/features/ApiData';

export default function SignIn() {

    // const blog_data = useSelector((state) => state.Api.newsData);
    // const token_user = useSelector((state)=> state.Api.token);
    // console.log("sign-in", blog_data, token_user)

    const dispatch = useDispatch();
    const [token, setToken] = useState(null);
    const [credentials, setCredentials] = useState({
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
    const handleSignIn = async ()=>{
        try{
            const url = "https://impresario-global-backend.vercel.app/api/log-in"
            const response = await axios.post(url, credentials);
            const jwtToken = response.data.token;
            const userName = response.data.user_name;
            setToken(jwtToken);
            dispatch(tokenData(token));
            navigate("/dashboard", { state: { token: jwtToken, userName : userName } });

            // console.log("log-in succesfully:", jwtToken);
        }catch(error){
            console.log("error found during sign-in", error.message)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded shadow-md mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
                style={{ top: '240px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                <p>Welcome back to the community!</p>
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
                onClick={handleSignIn}
                >Sign In</button>
                <p className='mt-5'>Don't have an account yet? <Link to = "/sign-up"><span className='text-red-700'>Sign up</span></Link></p>
            </div>
        </div>
    );
}
