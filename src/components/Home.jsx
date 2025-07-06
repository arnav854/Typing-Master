import React, { useState, useEffect, useRef, useCallback } from "react";
import { useUser } from "../context/ToggleContext";
import { useQuote } from "../context/QuotesChange";
import TestResult from "./TestResult";
import { useTestContext } from "../context/Testcontext";

function Home() {
  const styleFetchingButton = () => {
    return "hover:bg-slate-700 hover:text-white rounded-lg transition-all duration-500 px-3 py-1";
  };
  const TypingRef = useRef(null);
  
  const [userInput,setUserInput] = useState('')
  const partialCheckWrong= useRef([])
  const wrongRef = useRef(0)
  const [userInputIndex ,setUserInputIndex]=useState(0)
  
  
  const {
    setToggleQuote,
    quoteText,
    setLang,
    lang,
    setNumberFetch,
    setQuoteText,
    setPunctFetch,
    numberFetch,
    punctFetch,
    timer,
    setTimer,
    isTimerClicked,
    setIsTimerClicked,
    testCompleted ,
    setTestCompleted
  } = useQuote();

   const {
         testResultsX,
        setTestResult
   } =useTestContext()
  
    useEffect(()=>{
      TypingRef.current?.focus()
    },[])

    useEffect(() => {
  let timerId;
  if (isTimerClicked) {
    timerId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  } else {
    setTimer(0); 
  }

  return () => clearInterval(timerId); 
}, [isTimerClicked]);



  const handleRefresherButt = () => {
    setToggleQuote((prev) => !prev);
    setQuoteText("");
    setIsTimerClicked(false)
    setUserInput('')
    partialCheckWrong.current=[]
    wrongRef.current=0
  };

  const handleKeyPressed=(e)=>{
    if (!isTimerClicked){
      setIsTimerClicked(true)
    }
    if (userInput.length+1===quoteText.length){
      setTimeout(()=>{
       setTestResult((prev) => ({
  ...prev,
  wpm: Math.floor((60 * quoteText.length) / timer),
  Accuracy: ((quoteText.length - wrongRef.current)/quoteText.length)*100 ,
  wrong: wrongRef.current,
  TextLength: quoteText.length
}));

        setUserInput('')
        setIsTimerClicked(false)
        setTestCompleted(true)
      },1000)

    }
    const currentIndex = userInput.length

    if (e.key=="Backspace"){
      const prevIdx = currentIndex-1;
      const wrongIdx = partialCheckWrong.current.indexOf(prevIdx)
      if (wrongIdx!=-1){
        partialCheckWrong.current.splice(wrongIdx, 1);
      }
      setUserInput(prev=>prev.slice(0,-1))
      
    }else if (e.key.length==1){

      const expectedWord = quoteText[currentIndex]
      if (e.key!==expectedWord && !partialCheckWrong.current.includes(currentIndex)){
        partialCheckWrong.current.push(currentIndex)
        wrongRef.current+=1;

      }
      if (partialCheckWrong.current.length<=2)
        setUserInput(prev=>prev+e.key) 
    }

  }

  const getChar = (char, index) => {
  if (index >= userInput.length) return "";

  return userInput[index] === char
    ? "text-green-400 border-b-2 border-green-400"
    : "text-red-400 border-b-2 border-green-400";
};



  return (
    <>
      {
        testCompleted&&(
          <TestResult TestResultsX={testResultsX} />
        )
      }

    {  
     !testCompleted&&(<div
        tabIndex={0}
        ref={TypingRef}
        onKeyDown={(e) => handleKeyPressed(e)}
        className="h-3/4 w-full fixed top-32 flex flex-col px-7 gap-6 outline-none"
      >
        {/* Here is your Home pAge Starts 
            And thats your fetching place 
          */}
      {isTimerClicked && (
  <h3 className={`${styleFetchingButton()} text-3xl text-center`}>
    Time : {timer}s 
  </h3>
)}

{
 !isTimerClicked&& (<div className="h-20 w-full flex justify-center items-center ">
  <div className="h-16 w-[60vw] shadow-md shadow-white rounded-lg flex justify-around items-center gap-5 bg-gray-900 text-gray-500">
    <div className="flex items-center justify-center gap-10">
      {/* Punct */}
      <button
        onClick={() => {
          setNumberFetch(false);
          setPunctFetch((prev) => !prev);
        }}
        className={`${styleFetchingButton()} ${
          punctFetch ? "bg-green-200 text-gray-800" : ""
        }`}
      >
        Punctuations
      </button>

      {/* Capital */}
      <button
        onClick={() => {
          setQuoteText((prev) => String(prev).toUpperCase());
        }}
        className={`${styleFetchingButton()}`}
      >
        Capital letters
      </button>

      {/* Small */}
      <button
        onClick={() => {
          setQuoteText((prev) => String(prev).toLowerCase());
        }}
        className={`${styleFetchingButton()}`}
      >
        Small letters
      </button>
    </div>

    <span> | </span>

    <button
      onClick={() => {
        setNumberFetch((prev) => !prev);
        setPunctFetch(false);
      }}
      className={`${styleFetchingButton()} ${
        numberFetch ? "bg-green-200 text-gray-800" : ""
      }`}
    >
      Numbers
    </button>

    <span> | </span>

    <div className="flex items-center justify-center gap-6">
      <button
        onClick={() => setIsTimerClicked((prev) => !prev)}
        className={`${styleFetchingButton()} ${
          isTimerClicked ? "bg-green-200" : ""
        }`}
      >
        Custom time{" "}
      </button>
    </div>
  </div>
</div>)

}
        {/* Slect lang  */}
        <div className="flex justify-center">
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setQuoteText("");
            }}
            className="bg-transparent rounded-md outline-none "
            name=""
            id=""
          >
            <option value="English">English</option>
            {/* Duumy Data right now  */}
          </select>
        </div>

        <div className="h-48   w-full mt-11">
         
              {
                quoteText.split("").map((elem,idx)=>{
                  return (
                  
                    <span className={`text-2xl ${getChar(elem,idx)} 
                     ${idx===userInput.length ?`border-l-2 border-gray-400 scale-x-90`:``} 
                    `} key={idx}>
                      {
                        elem===" "?" ":elem
                      }
                    </span>

                    
                  )
                })
              }
          
        </div>

        <h3
          className="text-center cursor-pointer "
          onClick={handleRefresherButt}
        >
          Refresh
        </h3>
      </div>)
      }
    </>
  );
}

export default Home;
