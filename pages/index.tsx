import React from "react"
import { Layout } from "../components/Layout"
import { usePlay } from "../utils/usePlay"
import { StartView } from "../components/StartView"
import { GameView } from "../components/GameView"

export default function Home() {
  const {
    currentKana,
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
    <Layout title="数える">
      {view === "start" && (
        <StartView
          limit={limit}
          setLimit={setLimit}
          showNextNumber={showNextNumber}
        />
      )}
      {view !== "start" && (
        <GameView
          currentKana={currentKana}
          currentNumber={currentNumber}
          inputValue={inputValue}
          resetGame={resetGame}
          setInputValue={setInputValue}
          showNextNumber={showNextNumber}
          showResult={showResult}
          view={view}
        />
      )}
    </Layout>
  )
}
