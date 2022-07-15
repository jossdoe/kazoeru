import React from "react"
import { LayoutDefault } from "../components/layouts/LayoutDefault"
import { ParagraphInfo } from "../components/utils/ParagraphInfo"
import { HeadingSub } from "../components/utils/HeadingSub"
import { CtaTitle } from "../components/atoms/CtaTitle"
import { CtaLink } from "../components/molecules/CtaLink"
import { getRandomKaomoji } from "../utils/getRandomKaomoji"

import { content } from "../data/index-content"
import { data } from "../data/index-data"

export default function Index() {
  const kaomoji = getRandomKaomoji()

  return (
    <LayoutDefault title="数える">
      <HeadingSub>{kaomoji}</HeadingSub>
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
