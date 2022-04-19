import React from "react"
import { ButtonPrimary } from "./ButtonPrimary"
import { ButtonSecondary } from "./ButtonSecondary"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary"
}

function Button(props: ButtonProps) {
  const { className, variant, ...rest } = props

  if (variant === "secondary") return <ButtonSecondary className={`font-bold px-12 py-4 shadow-md rounded-full ${className}`} {...rest} />
  return <ButtonPrimary className={`font-bold rounded-full px-12 py-4 shadow-md ${className}`} {...rest} />
}

export { Button }
