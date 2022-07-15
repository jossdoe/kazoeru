import React from "react"

type CtaTitleProps = {
  children: string
}

function CtaTitle({ children }: CtaTitleProps) {
  return (
    <div className="block mx-auto font-bold mb-6 text-center">{children}</div>
  )
}

export { CtaTitle }
