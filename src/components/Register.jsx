// import React, { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
//   const { createUser } = useContext(AuthContext);
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);

//     createUser(email, password)
//       .then((result) => {
//         console.log(result.user);
//         const createdAt = result.user?.metadata?.creationTime
//         const user = { email , createdAt};
//         fetch("https://coffee-store-server-b2dgkg63v-sumaiyas-projects-8e919dd3.vercel.app/user", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(user),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.insertedId) {
              
//               Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "Your info successfully added to database",
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
//             }
//           });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
  return (
    <div className=" min-h-screen ">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 max-w-7xl mx-auto">
        <div className="lg:w-2/3">
          <img src="/more/2.png" alt="" />
        </div>

        <div className="flex items-center justify-center"> 
          <div>
            <h1 className="text-5xl font-bold text-center pb-3">Register now!</h1>

          <div className=" bg-transparent w-full lg:w-sm p-4 lg:p-8 shadow-2xl rounded-2xl">
            {/* <form onSubmit={handleLogin} className="card-body"> */}
            <form className="font-raleway">
              <fieldset className="fieldset">
                
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email Address"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                
                <button className="btn bg-[#331a15] text-white mt-4 font-rancho text-xl">
                  Register
                </button>
              </fieldset>
            </form>

            <p className="text-center font-raleway text-sm mt-2">Already have an account? Please <Link to='/login' className="link text-blue-700">Login</Link></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
