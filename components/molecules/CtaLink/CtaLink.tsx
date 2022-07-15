import React from "react"
import Link from "next/link"
import { HiArrowCircleRight } from "react-icons/hi"

type CtaLinkProps = {
  children: string
  url: string
  Icon: React.FC
}

function CtaLink({ children, url, Icon }: CtaLinkProps) {
  return (
    <Link key={url} href={url}>
      <a>
        <div className="flex items-center bg-white py-4 px-8 rounded-full shadow-md mb-4 hover:shadow-lg transition-all">
          <div className="mr-2">
            <Icon />
          </div>
          <div className="flex-1 text-left">{children}</div>
          <div className="text-gray-500">
            <HiArrowCircleRight />
          </div>
        </div>
      </a>
    </Link>
  )
}

export { CtaLink }
