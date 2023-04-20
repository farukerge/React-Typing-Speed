import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const { isFinish, correct, inCorrect, ticknumb, inCorTick, corTick } = useSelector((state) => state.words)
    console.log(correct);


  return (
      <>
           {
             isFinish && <div className=' w-[20rem] mx-auto border border-yellow-400 p-4'>
                    <div className='border-b-4'>
                        <h1 className='font-bold text-yellow-400'>result</h1>
                    </div>
                    <div className='flex flex-col text-yellow-500 font-semibold'>
                      <h3>words per minute: <span>{correct * 5 - inCorrect * 2}</span></h3>
                      <h3>keystrokes: <span><span>{corTick}</span>/<span>{inCorTick}</span> {ticknumb}</span> </h3>
                      <h3>accuracy:  {Math.round((correct * 100) / (correct + inCorrect))} % </h3>
                      <h3>correct words: {correct}</h3>
                      <h3 className='text-red-400'>errors : { inCorrect }</h3>
                    </div>
                </div>
            }
    </>
  )
}

export default Result

