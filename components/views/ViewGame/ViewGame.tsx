import React from "react"
import { Button } from "../../forms/Button"
import { InputText } from "../../forms/InputText"
import { addPeriodSeperator } from "../../../utils/addPeriodSeperator"
import type { View } from "../../../utils/usePlay"

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
      <h1 className="text-4xl font-bold mb-6">
        {addPeriodSeperator(currentNumber)}
      </h1>
      <label className="block mx-auto text-gray-500 text-sm">
        Enter Hiragana
      </label>
      <InputText
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
              <div className="">{currentKana}</div>
            </div>
          )}
          <Button variant="secondary" className="mr-6 mt-2" onClick={resetGame}>
            Back
          </Button>
          <Button variant="secondary" className="mt-2" onClick={showNextNumber}>
            Next
          </Button>
        </>
      )}
    </form>
  )
}

export { ViewGame }
