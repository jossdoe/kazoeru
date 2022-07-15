import React from "react"

interface ButtonSecondaryProps
  extends React.ComponentPropsWithoutRef<"button"> {}

function ButtonSecondary(props: ButtonSecondaryProps) {
  const { className, ...rest } = props

  return (
    <button
      className={`bg-gray-700 text-gray-50 ${className}`}
      {...rest}
    />
  )
}

export { ButtonSecondary }
