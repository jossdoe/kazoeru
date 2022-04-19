import React from "react"
import Head from "next/head"
import Link from "next/link"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { AiFillGithub } from "react-icons/ai"

type LayoutDefaultProps = {
  title: string
  hasBackToIndex?: boolean
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({
  title,
  children,
  hasBackToIndex,
}) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-gray-700">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-white p-4">
          <div className="flex max-w-2xl mx-auto text-center">
            <div className="flex-1 flex justify-start items-center">
              {hasBackToIndex && (
                <Link href="/">
                  <a className="flex items-center font-bold text-gray-600">
                    <HiOutlineArrowNarrowLeft />
                    <div className="ml-2">Home</div>
                  </a>
                </Link>
              )}
            </div>
            <div>
              <Link href="/">
                <a>
                  <div className="bg-red-500 inline-flex text-white w-10 h-10 rounded-full items-center justify-center">
                    数
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex-1"> </div>
          </div>
        </header>
        <main className="py-12 px-4 max-w-md mx-auto">{children}</main>
        <footer className="text-center">
          <a
            className="inline-block mb-2text-gray-400 text-xl"
            href="https://github.com/jossdoe/kazoeru"
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </footer>
      </div>
    </div>
  )
}

export { LayoutDefault }
