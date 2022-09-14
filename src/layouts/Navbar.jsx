import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import signIn from "../assets/icons/signin.svg";
import signUp from "../assets/icons/signup.svg";
import volume from "../assets/icons/volume.svg";
import mute from "../assets/icons/mute.svg";
import hamburger from "../assets/icons/hamburger.svg";

const Navbar = () => {
  let [isMute, setMute] = useState(false);
  return (
    <header className="bg-[#313134] z-50 md:h-[78px] lg:h-[78px] h-[58px] xl:h-[78px] fixed top-0 w-full flex">
      <nav className="flex justify-between items-center container">
        <div className="flex items-center gap-3">
          <img width={32} height={32} src={logo} alt="Logo" />
          <div className="lg:flex lg:gap-4 xl:flex xl:gap-4">
            <span className="font-bold text-white font-roboto tracking-[.175em] uppercase md:text-[.85rem] lg:text-[1rem] xl:text-[1rem] text-[.75rem]">
              SMS SERVICE
            </span>
            <span className="w-[1px] border-white border-[1px] h-[32px] hidden lg:block xl:block"></span>
            <span
              className="uppercase 
                tracking-[.13em] 
                md:text-[.55rem] 
                text-[.45rem] 
                md:leading-[1.5] 
                lg:leading-[1.5] 
                xl:leading-[1.5]  
                xl:text-[.6rem] 
                lg:text-[.6rem] 
                text-white"
            >
              <br className="lg:hidden xl:hidden " /> RENT A NUMBER
              <br className="hidden md:hidden lg:block xl:block" /> FOR
              RECEIVING SMS
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between hidden lg:flex xl:flex">
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
            <img
              onClick={() => setMute(!isMute)}
              className="cursor-pointer"
              src={isMute ? volume : mute}
              alt="Volume"
            />
          </div>
        </div>
        <div className="xl:hidden md:block sm:block lg:hidden block">
          <img className="w-[33px]" src={hamburger} alt="Menu icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
