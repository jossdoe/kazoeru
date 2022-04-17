import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { ViewTimeGame } from "../components/views/ViewTimeGame"
import { usePlayTime } from "../utils/hooks/usePlayTime"

export default function Time() {
  const dataPlayTime = usePlayTime()

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      <ViewTimeGame {...dataPlayTime} />
    </LayoutDefault>
  )
}
