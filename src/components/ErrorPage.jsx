import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-5'>
                <Link to='/'><button className='btn text-xl text-shadow-lg text-shadow-slate-400 bg-transparent hover:bg-[#d2b48c]'><FiArrowLeft className='mr-2'></FiArrowLeft>Back to home</button></Link>
            </div>
            <img className='w-full' src="/404/404.gif" alt="" />
        </div>
    );
};

export default ErrorPage;