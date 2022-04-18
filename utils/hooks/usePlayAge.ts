import { useState } from 'react'
import { translateAge } from '../translations/translateAge'

export type View = 'enter' | 'result'

function generateRandomAge() {
  const age = Math.floor(Math.random() * 99)
  return age + 1
}

function usePlayAge() {
  const initialAge = generateRandomAge()

  const [view, setView] = useState<View>('enter')
  const [currentAge, setCurrentAge] = useState<number>(initialAge)
  const [currentKanas, setCurrentKanas] = useState<string[]>(translateAge(initialAge))
  const [inputValue, setInputValue] = useState<string>('')

  const showNextAge = () => {
    const newAge = generateRandomAge()
    const newKanas = translateAge(newAge)

    setCurrentAge(newAge)
    setCurrentKanas(newKanas)
    setView('enter')
    setInputValue('')
  }

  const showResult = () => {
    setView('result')
  }

  return {
    currentAge,
    currentKanas,
    inputValue,
    showNextAge,
    setInputValue,
    showResult,
    view,
  }
}

export { usePlayAge }
