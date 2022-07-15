import React from "react"
import { Button } from "../components/molecules/Button"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { HeadingSub } from "../components/atoms/HeadingSub"
import { ParagraphInfo } from "../components/atoms/ParagraphInfo"
import { ViewTimeGame } from "../components/organisms/ViewTimeGame"
import { usePlayTime } from "../utils/hooks/usePlayTime"

export default function Time() {
  const states = usePlayTime()
  const { view, showNextTime } = states

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      {view === "start" && (
        <>
          <HeadingSub>Telling The Time</HeadingSub>
          <ParagraphInfo className="p-8">
            Exercises will give a time in 24h-format, either full hours or half hours. Solutions can use either
            the 12h-system with ごぜん and ごご or the 24h-system.
            がんばってください！
          </ParagraphInfo>
          <div className="text-center">
            <Button onClick={() => showNextTime()}>Start</Button>
          </div>
        </>
      )}
      {view !== "start" && <ViewTimeGame {...states} />}
    </LayoutDefault>
  )
}
