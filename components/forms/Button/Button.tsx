import React from "react"
import { ButtonPrimary } from "./ButtonPrimary"
import { ButtonSecondary } from "./ButtonSecondary"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary"
}

function Button(props: ButtonProps) {
  const { className, variant, ...rest } = props

  if (variant === "secondary") return <ButtonSecondary className={className} {...rest} />
  return <ButtonPrimary className={className} {...rest} />
}

export { Button }
