import React from 'react'

type HeadingSubProps = {
  className?: string
  children: React.ReactNode
}

function HeadingSub ({ children, className }: HeadingSubProps) {
  return <h2 className={`block text-lg font-bold text-center ${className}`}>{children}</h2>
}

export { HeadingSub }