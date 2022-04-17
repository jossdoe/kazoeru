import { useState } from 'react'
import { translateDate } from '../translations/translateDate'

export type View = 'start' | 'enter' | 'result'

function generateRandomDate() {
  const start = new Date(2020, 0, 1)
  const end = new Date(2020, 11, 31)
  const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return { month: random.getMonth() + 1, day: random.getDate() }
}

function usePlayDates() {
  const [view, setView] = useState<View>('start')
  const [currentMonth, setCurrentMonth] = useState<number>(0)
  const [currentDay, setCurrentDay] = useState<number>(0)
  const [currentKana, setCurrentKana] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')

  const resetGame = () => {
    setView('start')
    setCurrentMonth(0)
    setCurrentDay(0)
    setCurrentKana('')
    setInputValue('')
  }

  const showNextDate = () => {
    const newDate = generateRandomDate()
    const newKana = translateDate(newDate)

    setCurrentMonth(newDate.month)
    setCurrentDay(newDate.day)
    setCurrentKana(newKana)
    setView('enter')
    setInputValue('')
  }

  const showResult = () => {
    setView('result')
  }

  return {
    currentDay,
    currentKana,
    currentMonth,
    inputValue,
    showNextDate,
    resetGame,
    setInputValue,
    showResult,
    view,
  }
}

export { usePlayDates }
