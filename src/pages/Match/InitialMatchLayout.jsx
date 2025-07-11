import React, { useState } from "react";
import { Link } from "react-router-dom";

function InitialMatchLayout() {
  const styleBot_1v1 =
    "flex flex-col justify-center items-center animate-orbit rounded-lg border-2";
  const [isHover_Bot, setIsHover_Bot] = useState(false);
  const [isHover_1v1, setIsHover_1v1] = useState(false);
  const [isClicked_Bot, setisClicked_Bot] = useState(false);
  const [isClicked_1v1, setisClicked_1v1] = useState(false);

  return (
    <div className="h-3/4 w-full  fixed top-24 flex items-center justify-around px-7 ">
      {/* Its your bot  */}

      {!isClicked_Bot && (
        <div
          onMouseEnter={() => setIsHover_Bot(true)}
          onMouseLeave={() => setIsHover_Bot(false)}
          onClick={() => setisClicked_Bot(true)}
          className={`Bot ${styleBot_1v1}
           transition-all hover:scale-105
      `}
        >
          {!isHover_Bot && (
            <button className="text-3xl font-bitcount p-8 font-bold">
              Fight With a Bot
            </button>
          )}
          {isHover_Bot && (
            <h3 className="text-1xl  p-8 w-[20vw] font-bold font-offSide leading-relaxed">
              A match between Bot and you ! For this you can select the
              difficulty level as Easy or Hard
            </h3>
          )}
        </div>
      )}
      {isClicked_Bot && (
        <div
          className={`Bot_LevelSelection flex flex-col h-[60vh] w-[30vw] border-2 animate-orbit justify-around
           transition-all rounded-lg
      `}
        >
          <h3 className="ml-5 text-2xl ">
            <i
              onClick={() => setisClicked_Bot(false)}
              className="ri-arrow-left-wide-line cursor-pointer "
            >
              {" "}
            </i>
          </h3>
          <h3 className="text-2xl font-offSide text-center">
            Select your Difficulty level
          </h3>
          <div className="w-full flex justify-center">
            <Link
              to={"bot_easy"}
              className="bg-green-400 border-1 p-4 border-1  hover:scale-105 text-center w-1/4 rounded-2xl cursor-pointer "
            >
              Easy{" "}
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <Link
              to={"bot_medium"}
              className="bg-yellow-400 border-1 p-4 border-1  hover:scale-105 text-center w-1/4 rounded-2xl cursor-pointer "
            >
              medium{" "}
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <Link
              to={"bot_hard"}
              className="bg-red-400 border-1 p-4 border-1  hover:scale-105 text-center w-1/4 rounded-2xl cursor-pointer "
            >
              Hard <i className="ri-skull-line"></i>{" "}
            </Link>
          </div>
        </div>
      )}
      {/* Now your 1 vs 1  */}

      {!isClicked_1v1 && (
        <div
          onMouseEnter={() => setIsHover_1v1(true)}
          onMouseLeave={() => setIsHover_1v1(false)}
          className={`1v1
      ${styleBot_1v1}
      transition-all hover:scale-105
      `}
        >
          {!isHover_1v1 && (
            <button className="text-3xl font-bitcount p-8 font-bold">
              1 v/s 1
            </button>
          )}
          {isHover_1v1 && (
            <h3 className="text-1xl  p-8 w-[20vw] font-bold font-offSide leading-relaxed">
              A match between you and your opponents ! For this you can send
              notification to your friend by seraching in the search bar can
              send link or find any custom opponent
            </h3>
          )}
        </div>
      )}
      {isClicked_1v1 && (
        <div className="1v1_matchCriteria h-[60vh] w-[30vw] border-2 flex flex-col ">
          <div>
            <h3></h3>
          </div>
        </div>
      )}
    </div>
  );
}
// 44px -22px 79px -42px white

export default InitialMatchLayout;
