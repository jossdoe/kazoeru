import React from "react"
import { SecondaryButton } from "../../forms/Button"
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

  const inputClassesDefault =
    "block mx-auto w-full bg-white text-center p-4 rounded-md mb-6"

  const inputClassesCorrect =
    isCorrectAnswer && view === "result" ? "bg-green-400 text-green-50" : ""

  const inputClassesIncorrect =
    !isCorrectAnswer && view === "result" ? "bg-red-400 text-white" : ""

  const inputClasses = `${inputClassesDefault} ${inputClassesCorrect} ${inputClassesIncorrect}`

  return (
    <form className="text-center" onSubmit={onSubmitHandler}>
      <h1 className="text-4xl font-bold mb-6">
        {addPeriodSeperator(currentNumber)}
      </h1>
      <label className="block mx-auto text-gray-500 text-sm">
        Enter Hiragana
      </label>
      <input
        className={inputClasses}
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        autoFocus
      />
      {view === "enter" && (
        <SecondaryButton>Show Result</SecondaryButton>
      )}
      {view === "result" && (
        <>
          {isCorrectAnswer && <div className="mb-2 font-bold">Correct!</div>}
          {!isCorrectAnswer && (
            <div className="mb-6">
              <div className="mb-2 font-bold">Incorrect!</div>
              <div className="">{currentKana}</div>
            </div>
          )}
          <SecondaryButton className="mr-6 mt-2" onClick={resetGame}>
            Back
          </SecondaryButton>
          <SecondaryButton className="mt-2" onClick={showNextNumber}>
            Next
          </SecondaryButton>
        </>
      )}
    </form>
  )
}

export { ViewGame }
