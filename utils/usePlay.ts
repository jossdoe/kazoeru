import { useState } from 'react'
import { translateNumber } from './translateNumber'

export type View = 'start' | 'enter' | 'result'

function usePlay() {
  const [view, setView] = useState<View>('start')
  const [currentNumber, setCurrentNumber] = useState<number>(123)
  const [currentKana, setCurrentKana] = useState<string>(translateNumber('123'))
  const [inputValue, setInputValue] = useState<string>('')
  const [limit, setLimit] = useState<number>(100)

  const resetGame = () => {
    setView('start')
    setCurrentNumber(0)
    setCurrentKana('')
    setInputValue('')
  }

  const showNextNumber = () => {
    const newNumber = Math.floor(Math.random() * limit)
    const newKana = translateNumber(newNumber.toString())

    setCurrentNumber(newNumber)
    setCurrentKana(newKana)
    setView('enter')
    setInputValue('')
  }

  const showResult = () => {
    setView('result')
  }

  return {
    currentKana,
    currentNumber,
    inputValue,
    limit,
    showNextNumber,
    resetGame,
    setInputValue,
    setLimit,
    showResult,
    view,
  }
}

export { usePlay }
