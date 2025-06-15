// import React, { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { FiArrowLeft } from "react-icons/fi";

const Register = () => {
  

  const { registerUser } = useContext(AuthContext);

const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/')
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have registered successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" min-h-screen ">
      <div className="max-w-7xl mx-auto my-6">
                        <Link to='/'><button className='btn text-xl text-shadow-lg text-shadow-slate-400 bg-transparent hover:bg-[#d2b48c]'><FiArrowLeft className='mr-2'></FiArrowLeft>Back to home</button></Link>
                    </div>
      <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-4 max-w-7xl mx-auto">
        <div className="w-full place-items-center lg:w-2/3">
          <img src="/more/2.png" alt="" />
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold text-center pb-3">
              Register now!
            </h1>

            <div className=" bg-transparent w-full md:w-lg lg:w-sm p-4 lg:p-8 shadow-2xl rounded-2xl">
              {/* <form onSubmit={handleLogin} className="card-body"> */}
              <form onSubmit={handleSubmit(onSubmit)} className="font-raleway">
                <fieldset className="fieldset">
                  <label className="label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Full Name"
                    {...register("name", { required: true })}
                  />

                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <button className="btn bg-[#331a15] text-white mt-4 font-rancho text-xl">
                    Register
                  </button>
                </fieldset>
              </form>

              <p className="text-center font-raleway text-sm mt-2">
                Already have an account? Please{" "}
                <Link to="/login" className="link text-blue-700">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
