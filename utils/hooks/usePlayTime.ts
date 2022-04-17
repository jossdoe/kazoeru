import { useState } from 'react'
import { translateTime } from '../translations/translateTime'

export type View = 'enter' | 'result'

function generateRandomTime() {
  const hour = Math.floor(Math.random() * 24)
  const minutes = Math.floor(Math.random() * 60)

  return { hour, minutes: minutes > 30 ? 30 : 0 }
}

function usePlayTime() {
  const initialTime = generateRandomTime()

  const [view, setView] = useState<View>('enter')
  const [currentHour, setCurrentHour] = useState<number>(initialTime.hour)
  const [currentMinutes, setCurrentMinutes] = useState<number>(initialTime.minutes)
  const [currentKanas, setCurrentKanas] = useState<string[]>(translateTime(initialTime))
  const [inputValue, setInputValue] = useState<string>('')

  const showNextTime = () => {
    const newTime = generateRandomTime()
    const newKanas = translateTime(newTime)

    setCurrentHour(newTime.hour)
    setCurrentMinutes(newTime.minutes)
    setCurrentKanas(newKanas)
    setView('enter')
    setInputValue('')
  }

  const showResult = () => {
    setView('result')
  }

  return {
    currentHour,
    currentKanas,
    currentMinutes,
    inputValue,
    showNextTime,
    setInputValue,
    showResult,
    view,
  }
}

export { usePlayTime }
