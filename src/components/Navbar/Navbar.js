import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';

export default function Navbar() {

    return (
        <nav className="bg-gray-800 p-3 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side: Logo */}
                <div className="text-white">
                    <Link to="/"><img className=" w-16 h-14" src={logo} alt='img.jpeg'/></Link>
                </div>

                {/* Right Side: Signup and Login Buttons */}
                <div className="flex space-x-4">
                    <Link to = "/sign-up"><button className="text-white bg-yellow-500 p-2 rounded font-bold">Sign-Up</button></Link>
                    <Link to = "/sign-in"><button className="text-white bg-yellow-500 p-2 rounded font-bold">Log In</button></Link>
                </div>
            </div>
        </nav>
    )
}
