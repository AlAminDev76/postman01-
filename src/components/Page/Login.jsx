
import React, { useState } from "react";
import LoginImg from '../../assets/LoginImg.png'
import Google from '../../assets/Google.png'
import { Link, useNavigate } from "react-router-dom"
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword ,sendEmailVerification,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
   const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [show, setShow] = useState (false)

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleLogin = () => {


    if (!email) {
      setEmailError("Please enter your email");

    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

      setEmailError("Please enter a valid email");

    }


    if (!password) {
      setPasswordError("Please enter a password");

    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");

    }
    if(email&&password&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      signInWithEmailAndPassword(auth, email, password)
  .then(( user) => {
  sendEmailVerification(auth.currentUser)
  console.log(user, "login")
  
  setTimeout(() => {
    navigate("/home");
  }, 3000);
  toast.success("Login successful!");
})

  .catch((error) => {
    const errorCode = error.code;
   console.log(errorCode)
   if(errorCode.includes("auth/invalid-credential"))
   toast.error("Login failed!")
  
  });

    }



  };
  const handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((user) => {
      
      console.log( user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log( errorCode);
    });
};

  
  

  return (
    <div className="flex items-center">
      
      <div className="w-1/2 flex justify-end mr-[142px]">
        <div>
          <h3 className="font-primary text-[33px] font-bold text-[#11175D]">
            Login to your account!
          </h3>
          <div>
            <img onClick={handleGoogleSignIn} src={Google} alt="" className='mt-[29px] w-[220px] h-[62px]' />
          </div>

          {/* Email */}
          <div className="w-[368px] relative mt-[32px]">
            <p className="absolute top-[-10px]   font-primary text-[13px]    text-[#707070]">
              Email Address
            </p>
            <input

              type="email"
              value={email}
              onChange={handleEmail}
              className="w-full py-[26px] pr-[66px]  border-b-2 border-[#B8B9CE] outline-0 text-[20px] text-[#03014C] font-semibold "
              placeholder="Youraddress@email.com"
            />
            {emailError && (
              <p className="bg-red-500 px-2 text-white rounded text-[10px] mt-2">
                {emailError}
              </p>
            )}
          </div>




         
          <div className="w-[368px] relative mt-[39px]">
            <p className="absolute top-[-10px]  font-primary text-[13px]   text-[#707070]">
              Password
            </p>
            <input
              type= {show ? "text": "password"}
                
              onChange={handlePassword}
              className="w-full py-[26px] pr-[66px]  border-b-2 border-[#B8B9CE]  outline-0 text-[20px] text-[#03014C] font-semibold"
              placeholder="Enter your Password"
            />
              <div className="absolute top-[40%] right-[20px] ">
                          {
                            show ? <FaEye onClick={()=> setShow(!show)} size={20} />:  <FaEyeSlash onClick={()=> setShow(!show)} size={20} />
                          }
                         
            
                        </div>
            {passwordError && (
              <p className="bg-red-500 px-2 text-white rounded text-[10px] mt-2">
                {passwordError}
              </p>
            )}
          </div>

          
          <div className="w-[368px]">
            <button
              onClick={handleLogin}
              className="w-full mt-[70px] bg-primary py-5 rounded-[8px] text-[20px] text-white font-secondary font-semibold cursor-pointer">
              Login to Continue
            </button>
           <Link to="/PasswordReset">
  <p className="font-primary text-[13px] text-[#EA6C00] flex justify-center mt-[10px] font-medium cursor-pointer">
    Password Reset
  </p>
</Link>

            
            <p className="font-primary text-[13px] text-[#03014C] mt-[20px]">
              Don’t have an account ?{" "}
              <Link to="/">
                <span className="text-[#EA6C00] font-bold cursor-pointer">
                  Sign In
                </span></Link>
            </p>
          </div>
        </div>
      </div>

      
      <div className="w-1/2">
        <img
          className="h-screen w-full object-cover"
          src={LoginImg}
          alt="Login Visual"
        />
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  )
}

export default Login