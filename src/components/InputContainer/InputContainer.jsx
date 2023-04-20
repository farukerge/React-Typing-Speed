import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { decreaseTimer, checkWords, increWordIndex } from '../../features/wordSlice';
import{ GrPowerReset} from 'react-icons/gr'

const InputContainer = () => {
    const {time, timer} = useSelector(state => state.words);
    const [start, setStart] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (timer < 2) setStart(false)
        if (start) {
            setTimeout(() => dispatch(decreaseTimer()), 1000)
        }
    }, [start, timer, dispatch])
    function increIndex(e) {
        if (e.target.value[e.target.value.length - 1] === " ") {
            dispatch(increWordIndex());
            e.target.value = ""
        }
    }
    function Handlekeyboard(e) {
        dispatch(checkWords(e.target.value))
        setStart(true);
    }
  return (
      <div className='w-1/4 flex flex-col justify-center  mx-auto'>
          <div className='text-white text-center justify-center '>{time}</div>
          <div className='flex mx-auto justify-end py-5'>
              <input
                 type="text" 
                 onKeyUpCapture={(e) => increIndex(e)} 
                 autoFocus 
                 className='py-2 px-3 border relative border-gray-200 rounded-md text-sm  dark:bg-[#023047] dark:border-gray-700 dark:text-yellow-400' 
                 autoComplete="off" 
                 disabled={timer < 1 && !start} onChange={(e) => Handlekeyboard(e)} 
              />
              
                <button className=' p-2 rounded-lg absolute justify-end flex' onClick={() => window.location.reload()} >
                    <GrPowerReset className='text-2xl' color='red'/>
                </button>
          </div>        
    </div>
  )
}

export default InputContainer