import React from "react"
import { Button } from "../components/molecules/Button"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { HeadingSub } from "../components/atoms/HeadingSub"
import { ParagraphInfo } from "../components/atoms/ParagraphInfo"
import { ViewDateGame } from "../components/organisms/ViewDateGame"
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
      {view === "start" && (
        <>
          <HeadingSub>Reading Dates</HeadingSub>
          <ParagraphInfo className="p-8">
            Exercises will give a random combination of months and days. The
            solution must be typed fully in hiragana. がんばってください！
          </ParagraphInfo>
          <div className="text-center">
            <Button onClick={() => showNextDate()}>Start</Button>
          </div>
        </>
      )}
      {view !== "start" && (
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
      )}
    </LayoutDefault>
  )
}
