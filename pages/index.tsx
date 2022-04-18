import React from "react"
import Link from "next/link"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import {
  HiOutlineHashtag,
  HiOutlineCalendar,
  HiOutlineClock,
  HiArrowCircleRight,
  HiOutlineUser,
} from "react-icons/hi"
import { IconType } from "react-icons"
import { ParagraphInfo } from "../components/utils/ParagraphInfo"
import { HeadingSub } from "../components/utils/HeadingSub"

type LinkType = {
  url: string
  title: string
  Icon: IconType
}

const links: LinkType[] = [
  {
    url: "/pure",
    title: "Pure Numbers",
    Icon: HiOutlineHashtag,
  },
  {
    url: "/dates",
    title: "Dates",
    Icon: HiOutlineCalendar,
  },
  {
    url: "/time",
    title: "Time",
    Icon: HiOutlineClock,
  },
  {
    url: "/age",
    title: "Age",
    Icon: HiOutlineUser,
  },
]

export default function Home() {
  return (
    <LayoutDefault title="数える">
      <ParagraphInfo className="px-8">
        Quiz yourself on Japanese number readings. Select a mode and make sure
        to enter your answers in{" "}
        <span className="whitespace-nowrap">ひらがな</span>.
      </ParagraphInfo>
      <HeadingSub className="p-8">Choose Mode</HeadingSub>
      {links.map((link) => (
        <Link key={link.url} href={link.url}>
          <a>
            <div className="flex items-center bg-white py-4 px-8 rounded-md shadow-md mb-4">
              <div className="mr-2">
                <link.Icon />
              </div>
              <div className="flex-1 text-left">{link.title}</div>
              <div className="text-gray-500">
                <HiArrowCircleRight />
              </div>
            </div>
          </a>
        </Link>
      ))}
    </LayoutDefault>
  )
}
