import { useState } from 'react'
import { translateDate } from '../translations/translateDate'

export type View = 'enter' | 'result'

function generateRandomDate() {
  const start = new Date(2020, 0, 1)
  const end = new Date(2020, 11, 31)
  const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return { month: random.getMonth() + 1, day: random.getDate() }
}

function usePlayDates() {
  const initialDate = generateRandomDate()

  const [view, setView] = useState<View>('enter')
  const [currentMonth, setCurrentMonth] = useState<number>(initialDate.month)
  const [currentDay, setCurrentDay] = useState<number>(initialDate.day)
  const [currentKana, setCurrentKana] = useState<string>(translateDate(initialDate))
  const [inputValue, setInputValue] = useState<string>('')

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
    setInputValue,
    showResult,
    view,
  }
}

export { usePlayDates }
