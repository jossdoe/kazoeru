import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { usePlay } from "../utils/hooks/usePlay"
import { ViewStart } from "../components/views/ViewStart"
import { ViewGame } from "../components/views/ViewGame"

export default function Home() {
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
  } = usePlay()

  return (
    <LayoutDefault title="数える">
      {view === "start" && (
        <ViewStart
          limit={limit}
          setLimit={setLimit}
          showNextNumber={showNextNumber}
        />
      )}
      {view !== "start" && (
        <ViewGame
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
