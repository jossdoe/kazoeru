import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { usePlayPure } from "../utils/hooks/usePlayPure"
import { ViewPureStart } from "../components/organisms/ViewPureStart"
import { ViewPureGame } from "../components/organisms/ViewPureGame"
import { HeadingSub } from "../components/atoms/HeadingSub"
import { ParagraphInfo } from "../components/atoms/ParagraphInfo"

export default function Pure() {
  const {
    currentKanas,
    currentNumber,
    inputValue,
    limit,
    setInputValue,
    setLimit,
    showNextNumber,
    showResult,
    view,
  } = usePlayPure()

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      {view === "start" && (
        <>
          <HeadingSub>Basic Numbers</HeadingSub>
          <ParagraphInfo className="p-8">
            Excercises will state a random number, the solution must be fully typed in hiragana. がんばってください！
          </ParagraphInfo>
          <ViewPureStart
            limit={limit}
            setLimit={setLimit}
            showNextNumber={showNextNumber}
          />
        </>
      )}
      {view !== "start" && (
        <ViewPureGame
          currentKanas={currentKanas}
          currentNumber={currentNumber}
          inputValue={inputValue}
          setInputValue={setInputValue}
          showNextNumber={showNextNumber}
          showResult={showResult}
          view={view}
        />
      )}
    </LayoutDefault>
  )
}
