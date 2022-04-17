import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { translateDate } from "../utils/translations/translateDate"

function generateRandomDate() {
  const start = new Date(2020, 0, 1)
  const end = new Date(2020, 11, 31)
  const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return { month: random.getMonth() + 1, day: random.getDate() }
}

export default function Dates() {
  const onClickHandler = () => {
    const date = generateRandomDate()
    const translatedDate = translateDate(date)
    console.log({ date, translatedDate })
  }

  return (
    <LayoutDefault title="数える" hasBackToIndex>
      <button onClick={onClickHandler}>Test</button>
    </LayoutDefault>
  )
}
