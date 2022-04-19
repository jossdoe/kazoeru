import { useState } from 'react'
import { translatePureNumber } from '../translations/translatePureNumber'

export type View = 'start' | 'enter' | 'result'

function usePlayPure() {
  const [view, setView] = useState<View>('start')
  const [currentNumber, setCurrentNumber] = useState<number>(0)
  const [currentKanas, setCurrentKanas] = useState<string[]>([''])
  const [inputValue, setInputValue] = useState<string>('')
  const [limit, setLimit] = useState<number>(100)

  const showNextNumber = () => {
    const newNumber = Math.floor(Math.random() * limit)
    const newKana = translatePureNumber(newNumber)

    setCurrentNumber(newNumber)
    setCurrentKanas(newKana)
    setView('enter')
    setInputValue('')
  }

  const showResult = () => {
    setView('result')
  }

  return {
    currentKanas,
    currentNumber,
    inputValue,
    limit,
    showNextNumber,
    setInputValue,
    setLimit,
    showResult,
    view,
  }
}

export { usePlayPure }
