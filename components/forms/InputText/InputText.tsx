import React from "react"
import { InputTextDefault } from "./InputTextDefault"
import { InputTextCorrect } from "./InputTextCorrect"
import { InputTextIncorrect } from "./InputTextIncorrect"

interface InputTextProps extends React.ComponentPropsWithoutRef<"input"> {
  state?: "default" | "correct" | "incorrect"
}

function InputText(props: InputTextProps) {
  const { state } = props

  if (state === "correct") return <InputTextCorrect {...props} />
  if (state === "incorrect") return <InputTextIncorrect {...props} />
  return <InputTextDefault {...props} />
}

export { InputText }
