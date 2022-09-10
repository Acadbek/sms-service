import React from "react";
import logo from "../assets/icons/logo.svg";
import signIn from "../assets/icons/signin.svg";
import signUp from "../assets/icons/signup.svg";

const Navbar = () => {
  return (
    <header className="bg-[#313134] h-[78px] fixed top-0 w-full flex">
      <nav className="flex justify-between items-center container">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" />
          <span className="font-bold text-white font-roboto tracking-[.175em] uppercase">
            SMS SERVICE
          </span>
          <span className="w-[1px] border-white border-[1px] h-[32px] ml-3"></span>
          <span className="uppercase tracking-[.13em] text-[.6rem] text-white">
            RENT A NUMBER <br /> FOR RECEIVING SMS
          </span>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center after:block after:border after:border-[#ababab] after:mx-5 after:h-[55px]">
            <li className="text-[.813rem] text-[#ababab] py-[0.5rem] px-[1rem] hover:text-white cursor-pointer">
              Pricing
            </li>
            <li className="text-[.813rem] text-[#ababab] py-[0.5rem] px-[1rem] hover:text-white cursor-pointer">
              API
            </li>
            <li className="text-[.813rem] text-[#ababab] py-[0.5rem] px-[1rem] hover:text-white cursor-pointer">
              Receive sms online
            </li>
          </ul>
          <div className="flex items-center justify-between gap-[25px] w-fit">
            <div className="flex flex-col items-center p-3 cursor-pointer gap-2 hover:text-white">
              <img src={signIn} alt="" />
              <p className="text-[.813rem] text-[#ababab]">Sign in</p>
            </div>
            <div className="flex flex-col items-center p-3 cursor-pointer gap-2 hover:text-white">
              <img src={signUp} alt="" />
              <p className="text-[.813rem] text-[#ababab]">Sign up</p>
            </div>
            <select>
              <option value="">eng</option>
              <option value="">rus</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
