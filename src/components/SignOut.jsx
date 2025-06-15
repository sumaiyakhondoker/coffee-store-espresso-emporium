import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SignOut = () => { 
    const { logOut} = useContext(AuthContext)
    const navigate = useNavigate()

     const handleSignOut = () =>{
        logOut()
        .then(() => {
             Swal.fire({
                          title: "Success!",
                          text: "You have successfully signed out ",
                          icon: "success",
                          confirmButtonText: "Ok",
                        });
                        navigate('/')

 
}).catch((error) => {
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
console.log(error);
 navigate('/')
});
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>

            <div className="card bg-base-100 w-96 shadow-sm">
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">Please Confirm that you want to sign out.</h2>
    
    <div className="card-actions">
      <button onClick={handleSignOut} className="btn bg-[#e3b577]  hover:bg-transparent text-[#242222] text-xl  border-[#242222]  px-6">Sign Out</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignOut;