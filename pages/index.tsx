import React from "react"
import Link from "next/link"
import { LayoutDefault } from "../components/layouts/LayoutDefault"

type LinkType = {
  url: string
  title: string
}

const links: LinkType[] = [
  {
    url: "/pure",
    title: "Pure Numbers",
  },
  {
    url: "/time",
    title: "Time",
  },
  {
    url: "/dates",
    title: "Dates",
  },
]

export default function Home() {
  return (
    <LayoutDefault title="数える">
      <div className="block font-bold mb-6 text-center">Choose Mode</div>
      {links.map((link) => (
        <Link key={link.url} href={link.url}>
          <a>
            <div className="bg-white text-left py-4 px-8 rounded-md shadow-md mb-4">
              {link.title}
            </div>
          </a>
        </Link>
      ))}
    </LayoutDefault>
  )
}
