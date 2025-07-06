import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/ToggleContext";
import { Listbox } from "@headlessui/react";

function Footer() {
  const { toggleClicked, setToggleClicked } = useUser();

  return (
    <>
      <div className="fixed h-16 w-screen   flex justify-around bottom-0  ">
        <div className="flex gap-6 items-center">
          <a href="#" className="text-gray-500">
            <h3 className="text-sm">
              <i className="ri-keyboard-box-line"></i>
              <span>contact</span>
            </h3>
          </a>

          <a href="#" className="text-gray-500">
            <h3 className="text-sm">
              <i className="ri-vip-crown-line"></i>
              <span>Github</span>
            </h3>
          </a>

          <a href="#" className="text-gray-500">
            <h3 className="text-sm">
              <i className="ri-tools-line"></i>
              <span>Linkedin</span>
            </h3>
          </a>
          <a href="#" className="text-gray-500">
            <h3 className="text-sm">
              <i className="ri-tools-line"></i>
              <span>Instagram</span>
            </h3>
          </a>
        </div>
        <div className="text-gray-500 flex  items-center ">
          <select
            className="text-white bg-black/40 backdrop-blur-md p-2 rounded shadow"
            onChange={(e) => setToggleClicked(e.target.value)}
          >
            <option value="bg-gray-800 text-gray-500">Typing Theme</option>
            <option value="bg-black text-white">Black Theme</option>
            <option value="bg-gradient-to-r from-teal-950 to-cyan-950 text-orange-300">
              Tealing Theme
            </option>
            <option value="bg-gray-900  text-cyan-400">Space THeme</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Footer;
