import React from "react"
import { PrimaryButton } from "../../forms/Button"
import { addPeriodSeperator } from "../../../utils/addPeriodSeperator"

type ViewStartProps = {
  limit: number
  setLimit: (limit: number) => void
  showNextNumber: () => void
}

function ViewStart({ limit, setLimit, showNextNumber }: ViewStartProps) {
  return (
    <>
      <div className="block mx-auto font-bold mb-6 text-center">
        Choose Limit
      </div>
      <div className="text-center">
        <div className="bg-white text-left pt-6 pb-4 px-8 rounded-md shadow-md mb-8 inline-block">
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
      </div>
      <div className="text-center">
        <PrimaryButton onClick={() => showNextNumber()}>Go</PrimaryButton>
      </div>
    </>
  )
}

export { ViewStart }
