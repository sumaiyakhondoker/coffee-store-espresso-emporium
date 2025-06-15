// import React, { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';

import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMediaLogin from "./SocialMediaLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FiArrowLeft } from "react-icons/fi";

const Login = () => {
  // const {LoginUser} = useContext(AuthContext)
  // const handleLogin = e =>{
  //     e.preventDefault()
  //     const form = e.target;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(email, password);

  //     LoginUser(email, password)
  //     .then(result =>{
  //         console.log(result.user);

  //         const user = {
  //             email,
  //             lastLoggedAt: result.user?.metadata?.lastLoginTime

  //         }

  //         // update last logged at in the database
  //         fetch('https://coffee-store-server-b2dgkg63v-sumaiyas-projects-8e919dd3.vercel.app/user',{
  //           method: 'PATCH',
  //           headers:{
  //             'content-type': 'application/json'
  //           },
  //           body: JSON.stringify(user)
  //         })
  //         .then(res =>res.json())
  //         .then(data =>{
  //           console.log(data);
  //         })
  //     })
  //     .catch(error =>{
  //         console.error(error)
  //     })
  // }
  const { loginUser } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location.state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state || '/'}`)

         
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your have successfully logged in!!",
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
      
      <div className="flex  flex-col-reverse lg:flex-row gap-2 lg:gap-4 max-w-7xl mx-auto">
        <div className="w-full place-items-center lg:w-2/3">
          <img src="/more/2.png" alt="" />
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold text-center pb-3">Login now!</h1>

            <div className=" bg-transparent w-full md:w-lg lg:w-sm p-4 lg:p-8 shadow-2xl rounded-2xl">
              {/* <form onSubmit={handleLogin} className="card-body"> */}
              <form onSubmit={handleSubmit(onSubmit)} className="font-raleway">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                  />
                  {errors.exampleRequired && (
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
                  {errors.exampleRequired && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn bg-[#331a15] text-white mt-4 font-rancho text-xl">
                    Login
                  </button>
                </fieldset>
              </form>
              <div className="divider text-[#331a15]">OR</div>
              <SocialMediaLogin></SocialMediaLogin>

              <p className="text-center font-raleway text-sm mt-2">
                Don't have an account? Please{" "}
                <Link to="/register" className="link text-blue-700">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
