import React from 'react'

interface InputTextCorrectProps extends React.ComponentPropsWithoutRef<"input"> {}

function InputTextCorrect(props: InputTextCorrectProps) {
  const { className, ...rest } = props

  return (
    <input
      className={`w-full bg-green-400 text-green-50 text-center p-4 rounded-md mb-6 ${className}`}
      {...rest}
    />
  )
}

export { InputTextCorrect }
