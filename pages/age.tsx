import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { ViewDateGame } from "../components/views/ViewDateGame"
import { usePlayDates } from "../utils/hooks/usePlayDates"
import { translateAge } from "../utils/translations/translateAge"

export default function Age() {
  return (
    <LayoutDefault title="数える" hasBackToIndex>
      <button onClick={() => console.log(translateAge(29))}>Click</button>
    </LayoutDefault>
  )
}
