import React from "react"
import { Button } from "../../molecules/Button"
import { InputText } from "../../molecules/InputText"
import type { View } from "../../../utils/hooks/usePlayAge"
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi"

type ViewAgeGameProps = {
  currentAge: number
  currentKanas: string[]
  inputValue: string
  setInputValue: (value: string) => void
  showNextAge: () => void
  showResult: () => void
  view: View
}

function ViewAgeGame({
  currentAge,
  currentKanas,
  inputValue,
  setInputValue,
  showNextAge,
  showResult,
  view,
}: ViewAgeGameProps) {
  const isCorrectAnswer = currentKanas.includes(inputValue.trim())
  const inputState = isCorrectAnswer ? "correct" : "incorrect"

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (view === "enter") showResult()
    if (view === "result") showNextAge()
  }

  return (
    <form className="text-center" onSubmit={onSubmitHandler}>
      <h2 className="text-4xl font-bold mb-6">{`${currentAge} years old`}</h2>
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
              <div>{currentKanas[0]}</div>
            </div>
          )}
          <div className="mt-2">
            <Button variant="secondary" onClick={showNextAge}>
              Next
            </Button>
          </div>
        </>
      )}
    </form>
  )
}

export { ViewAgeGame }
