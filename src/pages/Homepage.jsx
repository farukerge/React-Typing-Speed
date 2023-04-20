import React from 'react'
import WordsContainer from '../components/WordsContainer/WordsContainer'
import InputContainer from '../components/InputContainer/InputContainer'
import Result from '../components/Result/Result'


const Homepage = () => {
  return (
    <div>
      <WordsContainer />
      <InputContainer />
      <Result />
    </div>
  )
}

export default Homepage