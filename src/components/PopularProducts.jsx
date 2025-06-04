import React from "react";
import { BsCup } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


// bg-[url(/more/4.png),_url(/more/5.png)]  bg-left,_bg-right  bg-no-repeat
const PopularProducts = () => {
  return ( 
    <div className=" my-10 md:my-24 relative">
      <div className="text-center">
        <p className="text-xl text-[#1b1a1a] font-raleway">
          --- Sip & Savor ---
        </p>
        <h2 className="text-5xl text-[#331a15] text-shadow-sm text-shadow-slate-500 mt-2 mb-3">
          Our Popular Products
        </h2>
        <Link to='/addCoffee'><button className="btn bg-[#e3b577] hover:bg-transparent  text-white hover:text-[#331a15] text-xl border-2 border-[#331a15]  mt-4 px-6">
          Add Coffee <BsCup className="text-[#331a15]"></BsCup>
        </button></Link>
        
      </div>

      {/* img */}
      <img src="/more/4.png"  alt="" className="absolute left-0 "/>
      <img src="/more/5.png" alt="" className="absolute right-0 opacity-20"/>

      {/* cards  container*/}
      <div className=" font-raleway max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5 mt-10">
        {/* card 1  */}
        <div className="card lg:flex-row justify-between bg-[#f5f4f1]/40 shadow-sm w-full md:w-1/2 p-7 items-center">
          <div className="flex gap-4 justify-center items-center">
            <div>
              <img src="https://i.ibb.co/S4Pm8QHn/5.png" alt="Album" />
            </div>
            <div className="text-lg ">
              <p>
                <span className="font-bold">Name: </span> Americano Coffee  
              </p>
              <p className="my-3">
                <span className="font-bold">Chef: </span> Mr. Matin Paul
              </p>
              <p>
                <span className="font-bold">Price: </span> 890 Taka 
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col justify-end gap-3 space-y-4 mt-4 lg:mt-0">
            <button className="btn btn-square bg-[#d2b48c] text-white">
              <IoEyeSharp className="text-xl"></IoEyeSharp>
            </button>
            
            <Link to='/updateCoffee'><button className="btn btn-square bg-[#3c393b] text-white">
              <BiSolidPencil className="text-xl"></BiSolidPencil>
            </button></Link>
            <button className="btn btn-square bg-[#ea4744] text-white">
              <MdDelete className="text-xl"></MdDelete>
            </button>
            
          </div>
        </div>
        {/* card 2  */}
        <div className="card lg:flex-row justify-between bg-[#f5f4f1]/40 shadow-sm w-full md:w-1/2 p-7 items-center">
          <div className="flex gap-4 justify-center items-center">
            <div>
              <img src="https://i.ibb.co/S4Pm8QHn/5.png" alt="Album" />
            </div>
            <div className="text-lg ">
              <p>
                <span className="font-bold">Name: </span> Americano Coffee  
              </p>
              <p className="my-3">
                <span className="font-bold">Chef: </span> Mr. Matin Paul
              </p>
              <p>
                <span className="font-bold">Price: </span> 890 Taka 
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col justify-end gap-3 space-y-4 mt-4 lg:mt-0">
            <button className="btn btn-square bg-[#d2b48c] text-white">
              <IoEyeSharp className="text-xl"></IoEyeSharp>
            </button>
            <button className="btn btn-square bg-[#3c393b] text-white">
              <BiSolidPencil className="text-xl"></BiSolidPencil>
            </button>
            <button className="btn btn-square bg-[#ea4744] text-white">
              <MdDelete className="text-xl"></MdDelete>
            </button>
            
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default PopularProducts;
