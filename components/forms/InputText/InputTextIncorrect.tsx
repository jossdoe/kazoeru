import React from 'react'

interface InputTextIncorrectProps extends React.ComponentPropsWithoutRef<"input"> {}

function InputTextIncorrect(props: InputTextIncorrectProps) {
  const { className, ...rest } = props

  return (
    <input
      className={`w-full bg-red-400 text-white text-center p-4 rounded-md mb-6 ${className}`}
      {...rest}
    />
  )
}

export { InputTextIncorrect }
