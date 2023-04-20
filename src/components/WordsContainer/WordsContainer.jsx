import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWords } from '../../features/wordSlice'

const WordsContainer = () => {
    const lang = useSelector(state => state.words.lang);
    const words = useSelector(state => state.words.items);
    const wordindexnumber = useSelector(state => state.words.wordindexnumber);
    const [text, setText] = useState([]);
    const [num, setNum] = useState(0);
  
    const dispatch = useDispatch();
   useEffect(() => {
        dispatch(getWords(lang));
    }, [lang])
    useEffect(() => {
        if (wordindexnumber % 15 === 0) {
            setNum(wordindexnumber)
        }
        setText(words.slice(num, 15 + num))
    }, [words, num])


  return (
      <div className='flex text-center w-full mx-auto justify-center'>
            <div className=' p-12' >
            <p className='text-[#ffb703] font-semibold'>
                {
                    text.map((k, index) => {
                        return (
                            <span key={index} className={`ml-2 break-words ${k.status} ${k.nowWords ? "set" : null}`} > {k.word}</span>
                        )
                    })
                }
            </p>


        </div >
    </div>
  )
}

export default WordsContainer