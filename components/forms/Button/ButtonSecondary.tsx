import React from "react"

interface ButtonSecondaryProps
  extends React.ComponentPropsWithoutRef<"button"> {}

function ButtonSecondary(props: ButtonSecondaryProps) {
  const { className, ...rest } = props

  return (
    <button
      className={`bg-gray-700 text-gray-50 py-4 px-6 rounded-lg shadow-md mt-4 ${className}`}
      {...rest}
    />
  )
}

export { ButtonSecondary }
