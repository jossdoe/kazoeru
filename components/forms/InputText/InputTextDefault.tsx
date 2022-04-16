import React from 'react'

interface InputTextDefaultProps extends React.ComponentPropsWithoutRef<"input"> {}

function InputTextDefault(props: InputTextDefaultProps) {
  const { className, ...rest } = props

  return (
    <input
      className={`w-full bg-white text-center p-4 rounded-md mb-6 ${className}`}
      {...rest}
    />
  )
}

export { InputTextDefault }
