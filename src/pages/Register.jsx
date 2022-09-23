import React, { useRef } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [callback, setCallback] = useState();
  const [value, setValue] = useState();
  const [expired, setExpired] = useState();

  const _reCaptchaRef = useRef();
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const handleChange = (value) => {
    console.log(`Captcha value: ${value}`);
    setValue({ value });
    if (value === null) setExpired(true);
  };

  const asyncScriptOnLoad = () => {
    setCallback("called!");
  };

  const send = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center bg-blue-400 w-full h-screen  border-2">
      <div className="border-2 py-[20px] px-6 rounded-lg px-4 bg-white">
        <form className="flex flex-col sm:min-w-[300px]  lg:min-w-[600px] md:min-w-[600px] xl:min-w-[600px]">
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
              className="px-[22px] uppercase hover:bg-blue-500 transition-all w-[200px] py-3 bg-blue-400 text-white rounded-md mt-[24px]"
              onChange={send}
              type="submit"
            >
              start sending
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;