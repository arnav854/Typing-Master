import React from "react";

function Login_Signin() {
  return (
    <div className="h-[65vh] w-full fixed top-32 flex  px-7  justify-around">
      <div className="h-full w-[30vw] gap-9 flex flex-col rounded-lg shadow-lg shadow-white items-center hover:scale-105 transition-all duration-500 hover:shadow-gray-800">
        <h3 className="text-center text-2xl font-semibold mt-3 text-white hover:scale-105 hover:text-green-200 transition-all duration-500 ">
          Sign Up
        </h3>

        <input
          className="h-7 w-[80%] placeholder:text-gray-200 bg-gradient-to-r from-slate-500 to-slate-700 rounded-sm shadow-inner shadow-green-200 text-orange-800"
          type="text"
          placeholder="Enter UserName"
          name=""
          id=""
        />
        <input
          className="h-7 w-[80%] placeholder:text-gray-200 bg-gradient-to-r from-slate-500 to-slate-700 rounded-sm shadow-inner shadow-green-200 text-orange-800 "
          type="text"
          placeholder="Enter Email"
          name=""
          id=""
        />
        <input
          className="h-7 w-[80%] placeholder:text-gray-200 bg-gradient-to-r from-slate-500 to-slate-700 rounded-sm shadow-inner shadow-green-200 text-orange-800 "
          type="text"
          placeholder="Enter Password"
          name=""
          id=""
        />
        <input
          className="h-7 w-[80%] placeholder:text-gray-200 bg-gradient-to-r from-slate-500 to-slate-700 rounded-sm shadow-inner shadow-green-200 text-orange-800 "
          type="text"
          placeholder="Enter your age "
          name=""
          id=""
        />

        <button> SigIn</button>
        <h3>
          Or Can continue with{" "}
          <span className="text-blue-800 font-extrabold"> Gmail </span>
        </h3>
      </div>
      <div className="h- full w-[30vw] gap-9 flex flex-col rounded-lg shadow-lg shadow-white items-center hover:scale-105 transition-all duration-500  hover:shadow-gray-800">
        <h3 className="text-center text-2xl font-semibold mt-3 text-white hover:scale-105 hover:text-green-200 transition-all duration-500 ">
          Log In
        </h3>

        <input
          className="h-7 w-[80%] placeholder:text-gray-200 bg-gradient-to-r from-slate-500 to-slate-700 rounded-sm shadow-inner shadow-green-200 text-orange-800 "
          type="text"
          placeholder="Enter Email"
          name=""
          id=""
        />
        <input
          className="h-7 w-[80%] placeholder:text-gray-200 bg-gradient-to-r from-slate-500 to-slate-700 rounded-sm shadow-inner shadow-green-200 text-orange-800 "
          type="text"
          placeholder="Enter Password"
          name=""
          id=""
        />

        <button> Login</button>
        <h3>
          Or Can continue with{" "}
          <span className="text-blue-800 font-extrabold"> Gmail </span>
        </h3>
      </div>
    </div>
  );
}

export default Login_Signin;
