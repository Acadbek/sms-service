import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center  border-2">
      <form className="flex flex-col min-w-[500px] ">
        <input
          className="border-b mt-2 py-2 pl-3 outline-none"
          type="text"
          placeholder="Full name"
        />
        <input
          className="border-b mt-2 py-2 pl-3 outline-none"
          type="email"
          placeholder="Business email"
        />
        <div>
          <select>
            <option value="">uz</option>
            <option value="">ru</option>
          </select>
          <input
            className="border-b mt-2 py-2 pl-3 outline-none"
            type="number"
            placeholder="Company"
          />
        </div>
        <input
          className="border-b mt-2 py-2 pl-3 outline-none"
          type="text"
          placeholder="Mobile Phone"
        />
        <input
          className="border-b mt-2 py-2 pl-3 outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          className="border-b mt-2 py-2 pl-3 outline-none"
          type="password"
          placeholder="Password"
        />
      </form>
    </div>
  );
};

export default Register;
