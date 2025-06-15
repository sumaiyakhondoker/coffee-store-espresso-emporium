import React, { useContext} from "react";
import { BsCup } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link} from "react-router-dom";
import Coffee from "./Coffee";
import { AuthContext } from "../providers/AuthProvider";


const PopularProducts = () => {
  

    const {coffees} = useContext(AuthContext)
  return ( 
    <div className="bg-[url(/more/1.png)] my-10 md:my-24 relative">
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

      
      {/* cards  container*/}
      <div className=" font-raleway max-w-7xl mx-5  lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 ">




        {
          coffees.map(coffee =><Coffee key={coffee._id} coffee={coffee}></Coffee>)
        }

        
     
      
        
        
      
      </div>
    </div>
  );
};

export default PopularProducts;
