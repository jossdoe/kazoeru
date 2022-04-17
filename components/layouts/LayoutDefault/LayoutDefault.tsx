import React from "react"
import Head from "next/head"
import Link from "next/link"

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
        <header className="flex bg-white p-4 text-center">
          <div className="flex-1 flex justify-start items-center">
            {hasBackToIndex && (
              <Link href="/">
                <a>Back</a>
              </Link>
            )}
          </div>
          <div className="flex-1">
            <Link href="/">
              <a>
                <div className="bg-red-500 inline-flex text-white w-10 h-10 rounded-full items-center justify-center">
                  数
                </div>
              </a>
            </Link>
          </div>
          <div className="flex-1"> </div>
        </header>
        <main className="py-12 px-4 max-w-md mx-auto">{children}</main>
        <footer className="text-center">
          <div className="fixed bottom-0 left-0 right-0">
            <a
              className="inline-block mb-2 border-b-2 border-gray-400 text-sm"
              href="https://github.com/jossdoe/kazoeru"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export { LayoutDefault }
