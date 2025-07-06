import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useUser } from "../context/ToggleContext";
import { useQuote } from "../context/QuotesChange";

function Combined({ children }) {
  const { toggleClicked } = useUser();
  const {isTimerClicked} = useQuote()
  return (
    <div
      className={`h-[100vh] w-screen ${toggleClicked} transition-all duration-500 relative flex flex-col justify-between overflow-hidden`}
    >
     { !isTimerClicked&&(<Navbar />)}
      {children}
      {!isTimerClicked&&(<Footer />)}
    </div>
  );
}

export default Combined;
