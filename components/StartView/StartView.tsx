import React from 'react'
import { addPeriodSeperator } from '../../utils/addPeriodSeperator'

type StartViewProps = {
  limit: number
  setLimit: (limit: number) => void
  showNextNumber: () => void
}

function StartView({ limit, setLimit, showNextNumber }: StartViewProps) {
  return (
    <main>
      <div className="block mx-auto font-bold mb-6">Choose Limit</div>
      <div className="bg-white inline-block text-left pt-6 pb-4 px-8 rounded-md shadow-md mb-8">
        {[10, 100, 1000, 10000, 100000, 1000000].map((num) => (
          <label key={num} className="block mb-2">
            <input
              className="mr-4"
              type="radio"
              value={num}
              checked={num === limit}
              onClick={() => setLimit(num)}
            />
            <span>{addPeriodSeperator(num)}</span>
          </label>
        ))}
      </div>
      <button
        className="block mx-auto bg-red-400 hover:bg-red-500 text-white font-medium rounded-lg w-32 py-4 shadow-md"
        onClick={() => showNextNumber()}
      >
        Go
      </button>
    </main>
  )
}

export { StartView }
