import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { ViewAgeGame } from "../components/views/ViewAgeGame"
import { usePlayAge } from "../utils/hooks/usePlayAge"

export default function Age() {
  const states = usePlayAge()

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      <ViewAgeGame {...states} />
    </LayoutDefault>
  )
}
