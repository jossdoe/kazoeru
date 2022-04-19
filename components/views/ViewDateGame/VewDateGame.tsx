import React from "react"
import { Button } from "../../forms/Button"
import { InputText } from "../../forms/InputText"
import { getMonthInEnglish } from "../../../utils/getMonthInEnglish"
import type { View } from "../../../utils/hooks/usePlayDates"
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi"

type ViewDateGameProps = {
  currentKana: string
  currentMonth: number
  currentDay: number
  inputValue: string
  setInputValue: (value: string) => void
  showNextDate: () => void
  showResult: () => void
  view: View
}

function ViewDateGame({
  currentKana,
  currentMonth,
  currentDay,
  inputValue,
  setInputValue,
  showNextDate,
  showResult,
  view,
}: ViewDateGameProps) {
  const isCorrectAnswer = currentKana === inputValue.trim()
  const inputState = isCorrectAnswer ? "correct" : "incorrect"

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (view === "enter") showResult()
    if (view === "result") showNextDate()
  }

  return (
    <form className="text-center" onSubmit={onSubmitHandler}>
      <h2 className="text-4xl font-bold mb-6">
        {`${getMonthInEnglish(currentMonth)} ${currentDay}`}
      </h2>
      <InputText
        label="Enter Hiragana"
        state={view === "result" ? inputState : "default"}
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        autoFocus={view === "enter"}
        readOnly={view === "result"}
      />
      {view === "enter" && <Button variant="secondary">Show Result</Button>}
      {view === "result" && (
        <>
          {isCorrectAnswer && (
            <div className="mb-2 flex-inline items-center">
              <HiOutlineCheckCircle className="relative -top-0.5 inline-block mr-2" />
              <span className="font-bold">Correct!</span>
            </div>
          )}
          {!isCorrectAnswer && (
            <div className="mb-6">
              <div className="mb-2 flex-inline items-center">
                <HiOutlineXCircle className="relative -top-0.5 inline-block mr-2" />
                <span className="font-bold">False</span>
              </div>
              <div>{currentKana}</div>
            </div>
          )}
          <div className="mt-2">
            <Button variant="secondary" onClick={showNextDate}>
              Next
            </Button>
          </div>
        </>
      )}
    </form>
  )
}

export { ViewDateGame }
