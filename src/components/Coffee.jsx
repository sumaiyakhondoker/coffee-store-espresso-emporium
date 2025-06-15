import React, { useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Coffee = ({ coffee }) => {
   const { _id, name, chef, price, photo } = coffee;

  const {coffees,setCoffees} = useContext(AuthContext)
  // console.log(coffees);

  

 


  const handleDelete = (e) => {
    e.preventDefault();
    // console.log("delete", _id);
     
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
const remainingCoffees = coffees.filter(coffee => coffee._id !== _id)

 


        if (data.deletedCount > 0) {
          
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
             
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
               setCoffees(remainingCoffees)
            }
          });
        }
      });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between bg-[#f5f4f1]/100 shadow-sm w-full  p-7 items-center rounded-xl">
      <div className="flex  flex-col md:flex-row gap-4 justify-center items-center">
        <div className="w-3/4 md:w-44">
          <img src={photo} alt="Album" />
        </div>
        <div className="text-lg ">
          <p>
            <span className="font-bold">Name: </span> {name}
          </p>
          <p className="my-3">
            <span className="font-bold">Chef: </span> {chef}
          </p>
          <p>
            <span className="font-bold">Price: </span> {price} tk
          </p>
        </div>
      </div>
      <div className="flex flex-row lg:flex-col justify-end gap-3 space-y-4 mt-4 lg:mt-0">
        <Link to={`/coffeeDetails/${_id}`}>
          <button className="btn btn-square bg-[#d2b48c] text-white">
            <IoEyeSharp className="text-xl"></IoEyeSharp>
          </button>
        </Link>

        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn btn-square bg-[#3c393b] text-white">
            <BiSolidPencil className="text-xl"></BiSolidPencil>
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-square bg-[#ea4744] text-white"
        >
          <MdDelete className="text-xl"></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default Coffee;
