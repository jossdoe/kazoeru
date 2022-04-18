import React from "react"

type ParagraphInfoProps = {
  children: React.ReactNode
}

function ParagraphInfo({ children }: ParagraphInfoProps) {
  return <div className="text-gray-500 p-8">{children}</div>
}

export { ParagraphInfo }