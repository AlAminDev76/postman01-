import React, { useState } from "react";
import RegistrationImg from "../../assets/RegistrationImg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner"; 

import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();

 const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  
  const handleSignUp = () => {
  
 setLoading(true); 
    if (!email) {
      setEmailError("Please enter your email");
     
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Please enter a valid email");
      
    }

    if (!fullName) {
      setFullNameError("Please enter your full name");
     
    }

    if (!password) {
      setPasswordError("Please enter a password");
      
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
     
    }
     console.log(email,fullName,password)
     
if(email&&fullName&&password&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user,"user");
        toast.success("Registration successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
     .catch((error) => {
  const errorCode = error.code;
  console.log(errorCode);
  if (errorCode.includes("auth/email-already-in-use")) {
    toast.error(" This email already used")
  }
    setLoading(false);  
    setFullName("");
setEmail("");
setPassword("");
});

  };
  }
  return (
    <div className="flex items-center min-h-screen">
      
      <div className="w-1/2 flex justify-end mr-[69px]">
        <div>
          <h3 className="font-secondary text-[34px] font-bold text-[#11175D]">
            Get started with easy registration
          </h3>
          <p className="font-secondary text-[21px] text-[#808080] mt-[13px]">
            Free register and start exploring today!
          </p>

          
          <div className="w-[368px] relative mt-[39px]">
            <p className="absolute top-[-10px] left-[40px] font-secondary text-[13px] bg-white px-3 font-semibold text-[#585D8E]">
              Email Address
            </p>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              className="w-full py-[26px] pr-[66px] pl-[52px] border-2 border-[#B8B9CE] rounded-[9px]"
              placeholder="Email Address"
            />
            {emailError && (
              <p className="bg-red-500 px-2 text-white rounded text-[10px] mt-2">
                {emailError}
              </p>
            )}
          </div>

          
          <div className="w-[368px] relative mt-[39px]">
            <p className="absolute top-[-10px] left-[40px] font-secondary text-[13px] bg-white px-3 font-semibold text-[#585D8E]">
              Full Name
            </p>
            <input
              type="text"
              value={fullName}
              onChange={handleFullName}
              className="w-full py-[26px] pr-[66px] pl-[52px] border-2 border-[#B8B9CE] rounded-[9px]"
              placeholder="Full Name"
            />
            {fullNameError && (
              <p className="bg-red-500 px-2 text-white rounded text-[10px] mt-2">
                {fullNameError}
              </p>
            )}
          </div>

         
          <div className="w-[368px] relative mt-[39px]">
            <p className="absolute top-[-10px] left-[40px] font-secondary text-[13px] bg-white px-3 font-semibold text-[#585D8E]">
              Password
            </p>
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={handlePassword}
              className="w-full py-[26px] pr-[66px] pl-[52px] border-2 border-[#B8B9CE] rounded-[9px]"
              placeholder="Password"
            />
            <div className="absolute top-[40%] right-[20px] cursor-pointer text-gray-600">
              {show ? (
                <FaEye onClick={() => setShow(!show)} size={20} />
              ) : (
                <FaEyeSlash onClick={() => setShow(!show)} size={20} />
              )}
            </div>
            {passwordError && (
              <p className="bg-red-500 px-2 text-white rounded text-[10px] mt-2">
                {passwordError}
              </p>
            )}
          </div>

         
          <div className="w-[368px]">
          <div>
  {loading ? (
    <Oval
      visible={true}
      height={80}
      width={80}
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  ) : (
    <button
      onClick={handleSignUp}
      className="w-full mt-[70px] bg-primary py-5 rounded-full text-[20px] text-white font-secondary font-semibold cursor-pointer"
    >
      Sign Up
    </button>
  )}
</div>


            <p className="text-center font-primary text-[13px] text-[#03014C] mt-[36px]">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#EA6C00] font-bold">Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      
      <div className="w-1/2">
        <img
          className="h-screen w-full object-cover"
          src={RegistrationImg}
          alt="Registration Visual"
        />
      </div>

      
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Registration;
