import React from 'react'
import LoginImg from '../../assets/LoginImg.png'
import Google from '../../assets/Google.png'
import { Link } from 'react-router'
const Login = () => {
  return (
    <div className="flex items-center">
          {/* Left Side (Form Section) */}
          <div className="w-1/2 flex justify-end mr-[142px]">
            <div>
              <h3 className="font-primary text-[33px] font-bold text-[#11175D]">
               Login to your account!
              </h3>
              <div>
                <img src={Google} alt="" className='mt-[29px] w-[220px] h-[62px]' />
              </div>
    
              {/* Email */}
              <div className="w-[368px] relative mt-[32px]">
                <p className="absolute top-[-10px]   font-primary text-[13px]    text-[#707070]">
                  Email Address
                </p>
                <input
                  type="text"
                  className="w-full py-[26px] pr-[66px]  border-b-2 border-[#B8B9CE] outline-0 text-[20px] text-[#03014C] font-semibold "
                  placeholder="Youraddres@email.com"
                />
              </div>
    
             
              
    
              {/* Password */}
              <div className="w-[368px] relative mt-[39px]">
                <p className="absolute top-[-10px]  font-primary text-[13px]   text-[#707070]">
                  Password
                </p>
                <input
                  type="password"
                  className="w-full py-[26px] pr-[66px]  border-b-2 border-[#B8B9CE]  outline-0 text-[20px] text-[#03014C] font-semibold"
                  placeholder="Enter your Password"
                />
              </div>
    
              {/* Sign Up Button */}
              <div className="w-[368px]">
                <button className="w-full mt-[70px] bg-primary py-5 rounded-[8px] text-[20px] text-white font-secondary font-semibold">
                  Login to Continue
                </button>
                <p className="font-primary text-[13px] text-[#03014C] mt-[36px]">
                  Don’t have an account ?{" "}
                  <Link to="/">
                  <span className="text-[#EA6C00] font-bold cursor-pointer">
                    Sign In
                  </span></Link>
                </p>
              </div>
            </div>
          </div>
    
          {/* Right Side (Image Section) */}
          <div className="w-1/2">
            <img
              className="h-screen w-full object-cover"
              src={LoginImg}
              alt="Login Visual"
            />
          </div>
        </div>
  )
}

export default Login