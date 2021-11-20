import React from 'react'
import { addPeriodSeperator } from '../../utils/addPeriodSeperator'
import type { View } from '../../utils/usePlay'

type EnterViewProps = {
  currentKana: string
  currentNumber: number
  inputValue: string
  resetGame: () => void
  setInputValue: (value: string) => void
  showNextNumber: () => void
  showResult: () => void
  view: View
}

function GameView({
  currentKana,
  currentNumber,
  inputValue,
  resetGame,
  setInputValue,
  showNextNumber,
  showResult,
  view,
}: EnterViewProps) {
  const isCorrectAnswer = currentKana === inputValue.trim()

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (view === 'enter') showResult()
    if (view === 'result') showNextNumber()
  }

  const buttonClasses =
    'bg-gray-700 text-gray-50 py-4 px-6 rounded-lg shadow-md mt-4'

  const inputClassesDefault =
    'block mx-auto w-96 bg-white text-center p-4 rounded-md mb-6'

  const inputClassesCorrect =
    isCorrectAnswer && view === 'result' ? 'bg-green-400 text-green-50' : ''

  const inputClassesIncorrect =
    !isCorrectAnswer && view === 'result' ? 'bg-red-400 text-white' : ''

  const inputClasses = `${inputClassesDefault} ${inputClassesCorrect} ${inputClassesIncorrect}`

  return (
    <main>
      <form onSubmit={onSubmitHandler}>
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
        {view === 'enter' && (
          <button className={buttonClasses}>Show Result</button>
        )}
        {view === 'result' && (
          <>
            {isCorrectAnswer && <div className="mb-2 font-bold">Correct!</div>}
            {!isCorrectAnswer && (
              <div className="mb-6">
                <div className="mb-2 font-bold">Incorrect!</div>
                <div className="">{currentKana}</div>
              </div>
            )}
            <button
              className={buttonClasses + ' mr-6 mt-2'}
              onClick={resetGame}
            >
              Back
            </button>
            <button
              className={buttonClasses + ' mt-2'}
              onClick={showNextNumber}
            >
              Next
            </button>
          </>
        )}
      </form>
    </main>
  )
}

export { GameView }
