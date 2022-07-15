import React from "react"

interface ButtonPrimaryProps extends React.ComponentPropsWithoutRef<"button"> {}

function ButtonPrimary(props: ButtonPrimaryProps) {
  const { className, ...rest } = props

  return (
    <button
      className={`bg-red-400 hover:bg-red-500 text-white ${className}`}
      {...rest}
    />
  )
}

export { ButtonPrimary }
