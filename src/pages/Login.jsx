import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import eye from "../assets/icons/eye.svg";
const Login = () => {
  const navigate = useNavigate();
  const passwordInputRef = useRef();

  const handlePasswordStatus = () => {
    if (passwordInputRef.current.value.length >= 1) {
      passwordInputRef.current.type === "password"
        ? (passwordInputRef.current.type = "text")
        : (passwordInputRef.current.type = "password");
    } else {
      passwordInputRef.current.type = "password";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="lg:w-[400px] xl:w-[400px] md:w-[400px] w-[300px]">
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer justify-center mr-[20px]"
        >
          <img width={70} height={70} src={logo} alt="Login" />
          <span className="font-bold text-black  font-roboto tracking-[.175em] uppercase md:text-[.85rem] lg:text-[1.5rem] xl:text-[1.5rem] text-[.75rem]">
            SMS SERVICE
          </span>
        </div>
        <p className="text-[22px] text-center">Sign in</p>
        <form className="flex flex-col">
          <label className="text-[#6b7399] text-[1rem] leading-[1.5]">
            Username
          </label>
          <input
            className="w-full py-[0.5rem] px-[0.75rem] border border-gray-300 text-[1rem] leading-[1.5] text-[#12263F] rounded-[4px] outline-none focus:border-[#12263F] mt-[0.5rem]"
            type="text"
            placeholder="Enter your username"
          />
          <label className="text-[#6b7399] text-[1rem] leading-[1.5] mt-[20px]">
            Password
          </label>
          <div className="relative">
            <input
              ref={passwordInputRef}
              className="w-full py-[0.5rem] px-[0.75rem] border border-gray-300 text-[1rem] leading-[1.5] text-[#12263F] rounded-[4px] outline-none focus:border-[#12263F] mt-[0.5rem] before:content-[\F06E]"
              type="password"
              placeholder="Enter your password"
            />
            <img
              onClick={handlePasswordStatus}
              className="w-[20px] cursor-pointer absolute top-[19px] right-[10px]"
              src={eye}
              alt="eye icon"
            />
          </div>
          <button className="py-[0.5rem] px-[0.75rem] bg-[#00a5ff] uppercase text-[15px] text-white rounded-[4px] mt-5">
            sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
