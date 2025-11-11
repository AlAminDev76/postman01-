import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom"; 
import "react-toastify/dist/ReactToastify.css";

const PasswordReset = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  
  const handleReset = () => {
   
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        console.log(error.code);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">
        <h2 className="text-2xl font-bold text-center text-[#EA6C00] mb-6">
          Reset Your Password
        </h2>

        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-[#EA6C00]"
        />

        <button
          onClick={handleReset}
          className="w-full bg-[#EA6C00] text-white py-2 rounded-md hover:bg-[#03014C] transition"
        >
          Send Reset Link
        </button>

       
        <Link to="/login">
          <button
            className=" mt-3 bg-white text-[#EA6C00] py-1 px-1 ml-[130px] rounded-md hover:bg-gray-300 transition"
          >
            Go Back
          </button>
        </Link>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default PasswordReset;
