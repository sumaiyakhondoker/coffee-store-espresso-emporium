import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const {name, chef, price,supplier,taste,category,details, photo} =  coffee
    console.log(coffee);
    return (
        <div className="bg-[url(/more/11.png)]">
        <div className="max-w-7xl mx-auto my-6">
            <Link to='/'><button className='btn text-xl text-shadow-lg text-shadow-slate-400 bg-transparent hover:bg-[#d2b48c]'><FiArrowLeft className='mr-2'></FiArrowLeft>Back to home</button></Link>
        </div>
        {/* <div className=" bg-[#f4f3f0] p-24"> */}
    
      
     <div className="max-w-7xl mx-auto  bg-[#f4f3f0] shadow-sm w-full py-15 font-raleway">
                  <div className="lg:w-[900px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-25 items-center ">
                    <div className='w-full lg:w-[350px]  place-items-center '>
                      <img src={photo} alt="Album" />
                    </div>
                    <div className="text-lg space-y-2 pl-5 md:pl-0">
                      <p>
                        <span className="font-bold">Name: </span> {name} 
                      </p>
                      <p>
                        <span className="font-bold">Chef: </span> {chef}
                      </p>
                      <p>
                        <span className="font-bold">Supplier: </span> {supplier}
                      </p>
                      <p>
                        <span className="font-bold">Taste: </span> {taste}
                      </p>
                      <p>
                        <span className="font-bold">Category: </span> {category}
                      </p>
                      <p>
                        <span className="font-bold">Details: </span> {details}
                      </p>
                      <p>
                        <span className="font-bold">Price: </span> {price}
                      </p>
                    </div>
                  
    </div>
    </div>
     </div>
    );
};

export default CoffeeDetails;