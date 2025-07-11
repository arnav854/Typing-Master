import React, {  useCallback, useEffect, useRef, useState } from "react";
import quoteData from "../../Provider/Provider.json";
import { useUser } from "../../context/ToggleContext";
import { Link } from "react-router-dom";

function CommonBotFight({ BotWritingPersec }) {
  const { toggleClicked } = useUser();
  const [botInput, setBotInput] = useState("");
  const botInputIndex = useRef(0);
  const WritingRef = useRef(null);
  const [time, setTime] = useState(60);
  const [randomQuoteText, setRandomQuoteText] = useState("");
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    WritingRef.current?.focus();
  }, []);
  useEffect(() => {
    const quoteOption = ["Punctuation", "Numbers"];
    const randomQuoteOptionSelected =
      quoteOption[Math.floor(Math.random() * quoteOption.length)];
    setRandomQuoteText(
      quoteData[`${randomQuoteOptionSelected}`][
        Math.floor(
          Math.random() * quoteData[`${randomQuoteOptionSelected}`].length
        )
      ]
    );
  }, []);

  const handleUserWriting = (e) => {
    if (e.key == "Backspace") {
      setUserInput((prev) => prev.slice(0, -1));
    } else {
      if (e.key.length === 1) {
        setUserInput((prev) => prev + e.key);
      }
    }
  };

  useEffect(() => {
    let timerId;
    if (time > 0) {
      timerId = setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [time]);

  useEffect(() => {
    if (botInputIndex.current >= randomQuoteText.length || time <= 0) return;

    const typingInterval = setTimeout(() => {
      let nextChar = "";
      for (let i = botInputIndex.current; i <botInputIndex.current+ BotWritingPersec; i++) {

        nextChar += randomQuoteText[i];
        
      }
      setBotInput((prev) => prev + nextChar);
      botInputIndex.current +=  BotWritingPersec ;
    }, 1000);

    return () => clearTimeout(typingInterval);
  }, [botInput, randomQuoteText]);

  const getChar = (index) => {
    if (index === botInput.length) {
      return "border-l-400 border-l-2 scale-95 border-l-gray-400";
    }
    return index < botInput.length
      ? "text-green-400  border-b-2  border-b-green-400  "
      : "";
  };

  const getUserChar = (char, index) => {
    if (index >= userInput.length) return "";
    else {
      return char === userInput[index]
        ? "text-green-400  border-b-2  border-b-green-400 "
        : "text-red-400 border-b-red-400 botrder-b-2";
    }
  };

  return (
    <div
      onKeyDown={(e) => handleUserWriting(e)}
      tabIndex={0}
      ref={WritingRef}
      className={`h-[100vh] w-full ${toggleClicked}   flex flex-col  items-center justify-evenly px-7 `}
    >
      <div>
        {randomQuoteText.split("").map((char, idx) => (
          <span
            className={`text-2xl
              ${getChar(idx)} 
            `}
            key={idx}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-offSide">Bot </h3>
      <div>
        <h3 className="text-xl">{time} s</h3>
      </div>
      <div>
        {randomQuoteText.split("").map((char, idx) => (
          <span
            className={`text-2xl ${
              idx === userInput.length
                ? "border-l-400 border-l-2 scale-95 border-l-gray-400 "
                : ""
            }
                  ${getUserChar(char, idx)}
                    `}
            key={idx}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        {/* Add user Name after Login if  */}
      </div>
      <h3 className="text-xl font-offSide">User </h3>
      <Link
        to={"/"}
        className="cursor-pointer hover:scale-110 inline-block hover:rotate-3 "
      >
        <i className="ri-arrow-left-wide-fill  "></i> Back
      </Link>
    </div>
  );
}

export default CommonBotFight;
