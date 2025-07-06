// context/UserContext.js
import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import quoteData from "../Provider/Provider.json";


const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quoteText, setQuoteText] = useState("");
  const [toggleQuote, setToggleQuote] = useState(false);
  const [lang, setLang] = useState("english");
  const [numberFetch, setNumberFetch] = useState(false);
  const [punctFetch,setPunctFetch] = useState('')
  const [timer,setTimer] = useState(0)
  const [isTimerClicked,setIsTimerClicked]= useState(false)
  const [testCompleted ,setTestCompleted]= useState(false)

  const catcheToggleQuoteFunction = useCallback(() => {
    
    
    if (numberFetch) {
  setQuoteText(
    quoteData.Numbers[Math.floor(Math.random() * quoteData.Numbers.length)]
  );
} else {
  setQuoteText(
    quoteData.Punctuation[Math.floor(Math.random() * quoteData.Punctuation.length)]
  );
}

    
  }, [toggleQuote, lang, numberFetch, punctFetch]);
  const completInfo ={
     quoteText,
        setToggleQuote,
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
        setTestCompleted,
        testCompleted
  }

  useEffect(() => {
    catcheToggleQuoteFunction();
  }, [catcheToggleQuoteFunction]);

  return (
    <QuoteContext.Provider
      value={
       completInfo
      }
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => useContext(QuoteContext);
