import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { ViewDateGame } from "../components/views/ViewDateGame"
import { usePlayDates } from "../utils/hooks/usePlayDates"

export default function Dates() {
  const {
    currentKana,
    currentMonth,
    currentDay,
    inputValue,
    setInputValue,
    showNextDate,
    showResult,
    view,
  } = usePlayDates()

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      <ViewDateGame
        currentKana={currentKana}
        currentMonth={currentMonth}
        currentDay={currentDay}
        inputValue={inputValue}
        setInputValue={setInputValue}
        showNextDate={showNextDate}
        showResult={showResult}
        view={view}
      />
    </LayoutDefault>
  )
}
