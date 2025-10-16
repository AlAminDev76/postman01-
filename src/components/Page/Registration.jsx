import React from "react";
import RegistrationImg from "../../assets/RegistrationImg.png";

const Registration = () => {
  return (
    <div className="flex items-center">
      {/* Left Side (Form Section) */}
      <div className="w-1/2 flex justify-end mr-[69px]">
        <div>
          <h3 className="font-secondary text-[34px] font-bold text-[#11175D]">
            Get started with easily register
          </h3>
          <p className="font-secondary text-[21px] text-[#808080] mt-[13px]">
            Free register and you can enjoy it
          </p>

          {/* Email */}
          <div className="w-[368px] relative mt-[39px]">
            <p className="absolute top-[-10px] tracking-[2px] left-[40px] font-secondary text-[13px] bg-white px-3 font-semibold text-[#585D8E]">
              Email Address
            </p>
            <input
              type="text"
              className="w-full py-[26px] pr-[66px] pl-[52px] border-2 border-[#B8B9CE] rounded-[9px]"
              placeholder="Email Address"
            />
          </div>

          {/* Full Name */}
          <div className="w-[368px] relative mt-[39px]">
            <p className="absolute top-[-10px] tracking-[2px] left-[40px] font-secondary text-[13px] bg-white px-3 font-semibold text-[#585D8E]">
              Full Name
            </p>
            <input
              type="text"
              className="w-full py-[26px] pr-[66px] pl-[52px] border-2 border-[#B8B9CE] rounded-[9px]"
              placeholder="Full Name"
            />
          </div>

          {/* Password */}
          <div className="w-[368px] relative mt-[39px]">
            <p className="absolute top-[-10px] tracking-[2px] left-[40px] font-secondary text-[13px] bg-white px-3 font-semibold text-[#585D8E]">
              Password
            </p>
            <input
              type="password"
              className="w-full py-[26px] pr-[66px] pl-[52px] border-2 border-[#B8B9CE] rounded-[9px]"
              placeholder="Password"
            />
          </div>

          {/* Sign Up Button */}
          <div className="w-[368px]">
            <button className="w-full mt-[70px] bg-primary py-5 rounded-full text-[20px] text-white font-secondary font-semibold">
              Sign up
            </button>
            <p className="text-center font-primary text-[13px] text-[#03014C] mt-[36px]">
              Already have an account?{" "}
              <span className="text-[#EA6C00] font-bold cursor-pointer">
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="w-1/2">
        <img
          className="h-screen w-full object-cover"
          src={RegistrationImg}
          alt="Registration Visual"
        />
      </div>
    </div>
  );
};

export default Registration;
