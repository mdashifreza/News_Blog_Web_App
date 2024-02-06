import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { RiFacebookBoxFill } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                // <div className="mb-4 md:mb-0">
                    // <h3 className="text-xl font-bold">Subscribe our newsletter</h3>
                    // <p className="text-sm">No ज्ञान, no spam, only मुद्दे की बात।</p>
                // </div>
                <div className="mb-4 md:mb-0">
                    <label htmlFor="email" className="text-sm block">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        className="py-2 px-3 rounded-md w-full border-2 border-yellow-300 shadow-sm shadow-yellow-100 placeholder:text"
                    />
                    <button className=" text-white py-2 px-4 rounded-md mt-2 bg-yellow-500">Contact me</button>
                </div>
                <div className="text-center md:text-left">
                    <p className="text-sm">Made with ❤️ by Md Ashif Reza</p>
                    <div className="flex mt-2">
                        <button className="mr-2"><FaInstagram /></button>
                        <button className="mr-2"><BiLogoLinkedinSquare /></button>
                        <button className="mr-2"><RiFacebookBoxFill/></button>
                        <button className="mr-2"><TbBrandYoutube/></button>
                        <button className="mr-2"><FaSquareTwitter/></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
