import React from 'react'

function TestResult({TestResultsX}) {
  console.log(TestResultsX)
  return (
    <div className="h-3/4 w-full  fixed top-28 flex  px-7 gap-6 outline-none"
    >
      
      <div className='w-32 h-full flex flex-col gap-4'>
        {
          Object.entries(TestResultsX).map(([key,value])=>(
            <div key={key}>
            <h3  className='text-2xl '>{key}</h3>
            <h3  className='mt-4 text-lg'>{value}</h3>
            </div>
          ))
        }
        </div>  
      
    </div>
  )
}

export default TestResult
