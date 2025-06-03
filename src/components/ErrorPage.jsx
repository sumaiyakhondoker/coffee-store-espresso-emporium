import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-5'>
                <Link to='/' className="text-2xl flex items-center "><FiArrowLeft className='mr-3 text-xl'></FiArrowLeft> <span className='text-shadow-lg text-shadow-slate-400'> Back to home</span></Link>
            </div>
            <img className='w-full' src="/404/404.gif" alt="" />
        </div>
    );
};

export default ErrorPage;