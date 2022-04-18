import React from "react"

type ParagraphInfoProps = {
  className?: string
  children: React.ReactNode
}

function ParagraphInfo({ children, className }: ParagraphInfoProps) {
  return <div className={`text-gray-500 ${className}`}>{children}</div>
}

export { ParagraphInfo }