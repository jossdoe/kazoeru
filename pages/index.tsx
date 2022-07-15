import React, { useState, useEffect } from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { ParagraphInfo } from "../components/utils/ParagraphInfo"
import { HeadingSub } from "../components/utils/HeadingSub"
import { CtaTitle } from "../components/atoms/CtaTitle"
import { CtaLink } from "../components/molecules/CtaLink"
import { getRandomKaomoji } from "../utils/getRandomKaomoji"

import { content } from "../data/index-content"
import { data } from "../data/index-data"

export default function Index() {
  const [isKaomojiVisible, setIsKaomojiVisible] = useState(true)
  const [kaomoji, setKaomoji] = useState("٩(｡•́‿•̀｡)۶")

  const kaomojiOpacity = isKaomojiVisible ? "opacity-100" : "opacity-0"

  useEffect(() => {
    const interval = setInterval(async () => {
      setIsKaomojiVisible(false)
      await new Promise((r) => setTimeout(r, 1000))
      setKaomoji(getRandomKaomoji(kaomoji))
      setIsKaomojiVisible(true)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <LayoutDefault title="数える">
      <HeadingSub
        className={`transition-opacity duration-500 ${kaomojiOpacity}`}
      >
        {kaomoji}
      </HeadingSub>
      <ParagraphInfo className="p-8">{content.description}</ParagraphInfo>
      <CtaTitle>{content.cta}</CtaTitle>
      {data.links.map((link) => (
        <CtaLink key={link.url} url={link.url} Icon={link.Icon}>
          {link.title}
        </CtaLink>
      ))}
    </LayoutDefault>
  )
}
