import React from "react"

interface PrimaryButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

function PrimaryButton(props: PrimaryButtonProps) {
  const { className, ...rest } = props

  return (
    <button
      className={`bg-red-400 hover:bg-red-500 text-white font-medium rounded-lg w-32 py-4 shadow-md ${className}`}
      {...rest}
    />
  )
}

export { PrimaryButton }
