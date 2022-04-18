import React from "react"
import { Button } from "../components/forms/Button"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { HeadingSub } from "../components/utils/HeadingSub"
import { ParagraphInfo } from "../components/utils/ParagraphInfo"
import { ViewAgeGame } from "../components/views/ViewAgeGame"
import { usePlayAge } from "../utils/hooks/usePlayAge"

export default function Age() {
  const states = usePlayAge()
  const { view, showNextAge } = states

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      {view === "start" && (
        <>
          <HeadingSub>Counting Age</HeadingSub>
          <ParagraphInfo className="p-8">
            Exercises will state an age from 1 to 99 years old. The solution
            must be fully typed in hiragana. がんばってください！
          </ParagraphInfo>
          <div className="text-center">
            <Button onClick={() => showNextAge()}>Start</Button>
          </div>
        </>
      )}
      {view !== "start" && <ViewAgeGame {...states} />}
    </LayoutDefault>
  )
}
