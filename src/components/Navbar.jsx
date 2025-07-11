import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useQuote } from "../context/QuotesChange";

function Navbar() {
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);
  const notificatonPanelRef = useRef(null);

  const { setToggleQuote,setTestCompleted } = useQuote();

  useGSAP(() => {
    if (notificationPanelOpen) {
      gsap.to(notificatonPanelRef.current, {
        width: "25%",
        opacity: 1,
        duration: 0.5,
        pointerEvents: "auto",
      });
    } else {
      gsap.to(notificatonPanelRef.current, {
        width: "0",
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });
    }
  }, [notificationPanelOpen]);
  return (
    <>
      <div className="fixed h-28 w-full   flex justify-around">
        <div className="flex gap-6 items-center">
          <NavLink to="/">
            <h1 className="text-3xl text-blue-300 font-serif font-semibold">
              <span className="text-2xl">
                <i className="ri-artboard-line"></i>
              </span>
              <span> Typing Master </span>{" "}
            </h1>
          </NavLink>

          <NavLink
            onClick={() => {
              setToggleQuote((prev) => !prev)

              setTestCompleted(false)
              }
            }
            to="/"
            className={({ isActive }) => {
              return isActive ? "text-orange-200" : "text-gray-500";
            }}
          >
            <h3 className="text-xl BackToText">
              <i className="ri-keyboard-box-line"></i>
            </h3>
          </NavLink>

          <NavLink
            to="/leaderboard"
            className={({ isActive }) => {
              return isActive ? "text-orange-200" : "text-gray-500";
            }}
          >
            <h3 className="text-xl leaderboard">
              <i className="ri-vip-crown-line"></i>
            </h3>
          </NavLink>
          <NavLink
            to="/leaderboard"
            className={({ isActive }) => {
              return isActive ? "text-orange-200" : "text-gray-500";
            }}
          >
            <h3 className="text-xl Team">
              <i className="ri-group-line"></i>
            </h3>
          </NavLink>
          <NavLink
            to="/match"
            className={({ isActive }) => {
              return isActive ? "text-orange-200" : "text-gray-500";
            }}
          >
            <h3 className="text-xl Match">
             <i className="ri-sword-line"></i>
            </h3>
          </NavLink>
        </div>

        <div className="flex gap-6 items-center">
          <h3
            onClick={() => setNotificationPanelOpen(true)}
            className="text-xl text-gray-500"
          >
            <i className="ri-notification-3-line"></i>
          </h3>

          <NavLink
            to="/Login+Signin"
            className={({ isActive }) => {
              return isActive ? "text-orange-200" : "text-gray-500";
            }}
          >
            <h3 className="text-xl">
              <i className="ri-user-line"></i>
            </h3>
          </NavLink>
        </div>
      </div>
      <div
        ref={notificatonPanelRef}
        className="absolute h-screen bg-gray-800 right-0  z-10 rounded-lg flex flex-col gap-6"
        style={{
          width: "0%",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <h1
          onClick={() => setNotificationPanelOpen(false)}
          className="  text-2xl text-gray-500 mt-3 flex justify-end mr-6 mb-6"
        >
          <i className="ri-close-circle-line"></i>
        </h1>
        <div className="w-full flex justify-center h-0 border-2 border-gray-500 mt-3 mb-3"></div>
        <div className="h-28 w-full  flex flex-col">
          <div className="flex justify-center">
            <h3>
              <span className="text-2xl text-gray-500 ">
                <i className="ri-megaphone-line"></i>
              </span>{" "}
              <span className="text-2xl text-gray-500">Annoucements</span>
            </h3>
          </div>
          <ul></ul>
        </div>
        <div className="w-full flex justify-center h-0 border-2 border-gray-500 mt-3 mb-3"></div>

        <div className=" w-full  flex flex-col">
          <div className="flex justify-center">
            <h3>
              <span className="text-2xl text-gray-500 ">
                <i className="ri-megaphone-line"></i>
              </span>{" "}
              <span className="text-2xl text-gray-500">Notifications</span>
            </h3>
          </div>
          <ul></ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
