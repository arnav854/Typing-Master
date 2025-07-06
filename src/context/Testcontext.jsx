import React, { createContext, useState, useContext, useEffect, useCallback } from "react";

const TestContext = createContext()

export const TestProvider=({children})=>{

    const testType = {
        wpm:0,
        Accuracy:0,
        timeTaken:0,
        wrong:0,
        TextLength:0,
        
    }
    const [testResultsX , setTestResult]=useState({

    })
    return (
    <TestContext.Provider value={{testResultsX,
        setTestResult}
    }>
        {children}
    </TestContext.Provider>
    )
}

export const useTestContext = ()=> useContext(TestContext)