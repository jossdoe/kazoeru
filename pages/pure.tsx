import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { usePlayPure } from "../utils/hooks/usePlayPure"
import { ViewPureStart } from "../components/views/ViewPureStart"
import { ViewPureGame } from "../components/views/ViewPureGame"

export default function Pure() {
  const {
    currentKanas,
    currentNumber,
    inputValue,
    limit,
    resetGame,
    setInputValue,
    setLimit,
    showNextNumber,
    showResult,
    view,
  } = usePlayPure()

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      {view === "start" && (
        <ViewPureStart
          limit={limit}
          setLimit={setLimit}
          showNextNumber={showNextNumber}
        />
      )}
      {view !== "start" && (
        <ViewPureGame
          currentKanas={currentKanas}
          currentNumber={currentNumber}
          inputValue={inputValue}
          resetGame={resetGame}
          setInputValue={setInputValue}
          showNextNumber={showNextNumber}
          showResult={showResult}
          view={view}
        />
      )}
    </LayoutDefault>
  )
}
