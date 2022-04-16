import React from "react"
import { Button } from "../../forms/Button"
import { InputText } from "../../forms/InputText"
import { addPeriodSeperator } from "../../../utils/addPeriodSeperator"
import type { View } from "../../../utils/hooks/usePlay"

type ViewGameProps = {
  currentKana: string
  currentNumber: number
  inputValue: string
  resetGame: () => void
  setInputValue: (value: string) => void
  showNextNumber: () => void
  showResult: () => void
  view: View
}

function ViewGame({
  currentKana,
  currentNumber,
  inputValue,
  resetGame,
  setInputValue,
  showNextNumber,
  showResult,
  view,
}: ViewGameProps) {
  const isCorrectAnswer = currentKana === inputValue.trim()

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (view === "enter") showResult()
    if (view === "result") showNextNumber()
  }

  const inputState = isCorrectAnswer ? "correct" : "incorrect"

  return (
    <form className="text-center" onSubmit={onSubmitHandler}>
      <h2 className="text-4xl font-bold mb-6">
        {addPeriodSeperator(currentNumber)}
      </h2>
      <InputText
        label="Enter Hiragana"
        state={view === "result" ? inputState : "default"}
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        autoFocus
      />
      {view === "enter" && <Button variant="secondary">Show Result</Button>}
      {view === "result" && (
        <>
          {isCorrectAnswer && <div className="mb-2 font-bold">Correct!</div>}
          {!isCorrectAnswer && (
            <div className="mb-6">
              <div className="mb-2 font-bold">Incorrect!</div>
              <div>{currentKana}</div>
            </div>
          )}
          <div className="mt-2">
            <Button variant="secondary" className="mr-6" onClick={resetGame}>
              Back
            </Button>
            <Button variant="secondary" onClick={showNextNumber}>
              Next
            </Button>
          </div>
        </>
      )}
    </form>
  )
}

export { ViewGame }
