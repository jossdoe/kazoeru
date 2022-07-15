import { IconType } from "react-icons"
import {
  HiOutlineHashtag,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUser,
} from "react-icons/hi"

type LinkType = {
  url: string
  title: string
  Icon: IconType
}

const links: LinkType[] = [
  {
    url: "/pure",
    title: "Basic Numbers",
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

export const data = { links }
