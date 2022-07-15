import React from "react"
import { InputTextDefault } from "./InputTextDefault"
import { InputTextCorrect } from "./InputTextCorrect"
import { InputTextIncorrect } from "./InputTextIncorrect"

interface InputTextProps extends React.ComponentPropsWithoutRef<"input"> {
  state?: "default" | "correct" | "incorrect"
  label?: string
}

function InputText(props: InputTextProps) {
  const { state, label } = props
  const isDefaultInput = state === "default" || !state

  return (
    <>
      {label && <label className="text-gray-500 text-sm">Enter Hiragana</label>}
      {state === "correct" && <InputTextCorrect {...props} />}
      {state === "incorrect" && <InputTextIncorrect {...props} />}
      {isDefaultInput && <InputTextDefault {...props} />}
    </>
  )
}

export { InputText }
