import React, { Fragment, useRef } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [callback, setCallback] = useState();
  const [value, setValue] = useState();
  const [expired, setExpired] = useState();

  const submitRef = useRef();
  const _reCaptchaRef = useRef();
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const handleChange = (value) => {
    console.log(`Captcha value: ${value}`);
    setValue({ value });
    console.log(submitRef.current.className + " active");
    if (value === null) setExpired(true);
  };

  const asyncScriptOnLoad = () => {
    setCallback("called!");
  };

  const send = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className="bg-blue-400">
      <div className="flex items-center justify-center  w-full h-screen">
        <div className="py-[20px] drop-shadow-xl rounded-lg px-4 bg-white">
          <form className="flex flex-col sm:min-w-[300px]  lg:min-w-[500px] md:min-w-[500px] xl:min-w-[500px]">
            <input
              className="border-b w-full border-b-slate-400 mt-4 py-2 pl-3 outline-none"
              type="text"
              placeholder="Full name"
            />
            <input
              className="border-b w-full border-b-slate-400 mt-4 py-2 pl-3 outline-none"
              type="email"
              placeholder="Business email"
            />
            <input
              className="border-b w-full border-b-slate-400 mt-4 py-2 pl-3 outline-none"
              type="text"
              placeholder="Company"
            />
            <input
              className="border-b w-full border-b-slate-400 mt-4 py-2 pl-3 outline-none"
              type="number"
              placeholder="Mobile Phone"
            />
            <input
              className="border-b w-full border-b-slate-400 mt-4 py-2 pl-3 outline-none"
              type="text"
              placeholder="Company"
            />
            <input
              className="border-b w-full border-b-slate-400 mt-4 py-2 pl-3 outline-none"
              type="password"
              placeholder="Company"
            />
            <div className="flex items-center justify-center">
              <ReCAPTCHA
                style={{ display: "inline-block", marginTop: "24px" }}
                theme="dark"
                ref={_reCaptchaRef}
                sitekey={TEST_SITE_KEY}
                onChange={handleChange}
                asyncScriptOnLoad={asyncScriptOnLoad}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                ref={submitRef}
                className={
                  value
                    ? `px-[22px] uppercase hover:bg-blue-500 transition-all w-[200px] py-3 bg-blue-500 text-white rounded-md mt-[24px]`
                    : "px-[22px] uppercase cursor-not-allowed transition-all w-[200px] py-3 bg-blue-300 text-white rounded-md mt-[24px]"
                }
                onChange={send}
                type="submit"
              >
                start sending
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
