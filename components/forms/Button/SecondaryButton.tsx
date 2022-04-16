import React from "react"

interface SecondaryButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

function SecondaryButton(props: SecondaryButtonProps) {
  const { className, ...rest } = props

  return (
    <button
      className={`bg-gray-700 text-gray-50 py-4 px-6 rounded-lg shadow-md mt-4 ${className}`}
      {...rest}
    />
  )
}

export { SecondaryButton }
