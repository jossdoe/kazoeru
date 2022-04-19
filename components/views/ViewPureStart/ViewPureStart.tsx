import React from "react"
import { Button } from "../../forms/Button"
import { addPeriodSeperator } from "../../../utils/addPeriodSeperator"

type ViewPureStartProps = {
  limit: number
  setLimit: (limit: number) => void
  showNextNumber: () => void
}

function ViewPureStart({ limit, setLimit, showNextNumber }: ViewPureStartProps) {
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
                onChange={() => setLimit(num)}
              />
              <span>{addPeriodSeperator(num)}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Button variant="primary" onClick={() => showNextNumber()}>Start</Button>
      </div>
    </>
  )
}

export { ViewPureStart }
