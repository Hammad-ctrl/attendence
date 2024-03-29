import React, { useState } from "react";
import { Link } from "react-router-dom";

const Regsiter = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");

  return (
    <div
      className="login-container w-[100%] h-[100vh] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))",
      }}
    >
      <div className="md:w-1/2 w-full md:h-[70%] h-[90%] backdrop:blur-lg">
        <div className="welcome-text flex items-center justify-center h-24">
          <h3 className="popins font-bold flex gap-2 items-center">
            Regsiter{" "}
            <lord-icon
              src="https://cdn.lordicon.com/kjtalhau.json"
              trigger="loop"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          </h3>
        </div>
        <form action="" className="flex flex-col items-center md:items-start gap-7">
          <div className="border-2 rounded-md w-[90%] md:w-full border-gray-400 h-12 relative">
            <div className="w-10 h-10 absolute top-0 right-4">
              <lord-icon
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </div>
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              autoComplete="false"
              type="text"
              placeholder="Enter Email Address"
              name="email"
              id=""
              className="w-full p-1 text-sm bg-transparent h-full font-semibold outline-none popins placeholder:popins text-gray-800 placeholder:text-gray-800"
            />
          </div>
          <div className="border-2 rounded-md w-[90%] md:w-full border-gray-400 h-12 relative">
            <div className="w-10 h-10 absolute top-0 right-4">
              <lord-icon
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </div>
            <input
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              autoComplete="false"
              type="text"
              placeholder="Enter Username"
              name="username"
              id=""
              className="w-full p-1 bg-transparent h-full font-semibold outline-none popins placeholder:popins text-gray-800 placeholder:text-gray-800 text-sm "
            />
          </div>
          <div className="border-2 rounded-md w-[90%] md:w-full border-gray-400 h-12 relative">
            <div className="w-10 h-10 absolute top-0 right-4">
              <lord-icon
                src="https://cdn.lordicon.com/ciawvzjk.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </div>
            <input
              autoComplete="false"
              value={password}
              onChange={(e=>setPassword(e.target.value))}
              type="password"
              placeholder="Enter Your Password"
              name="password"
              id=""
              className="w-full p-1 text-sm  bg-transparent h-full font-semibold outline-none popins placeholder:popins text-gray-800 placeholder:text-gray-800"
            />
          </div>
          <div className="login-button text-white">
            <button
              type="submit"
              className="w-44 text-center flex items-center gap-3 justify-center bg-blue-700 transition-all hover:bg-blue-800 px-2 text-white rounded-lg font-semibold py-3"
            >
              Regsiter{" "}
              <lord-icon
                src="https://cdn.lordicon.com/whtfgdfm.json"
                trigger="loop"
              ></lord-icon>
            </button>
          </div>
        </form>
        <div className="dont-have flex items-center justify-center mt-4">
          <p className="font-bold  popins">
           Already have an account?{" "}
            <Link className="text-blue-800" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;
