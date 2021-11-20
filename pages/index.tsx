import React from 'react'
import Head from 'next/head'
import { usePlay } from '../utils/usePlay'
import { StartView } from '../components/StartView'
import { GameView } from '../components/GameView'

export default function Home() {
  const {
    currentKana,
    currentNumber,
    inputValue,
    limit,
    resetGame,
    setInputValue,
    setLimit,
    showNextNumber,
    showResult,
    view,
  } = usePlay()

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-gray-700 max-w-md mx-auto px-4 py-12 text-center">
        <Head>
          <title>数える – japanese numbers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {view === 'start' && (
          <StartView
            limit={limit}
            setLimit={setLimit}
            showNextNumber={showNextNumber}
          />
        )}
        {view !== 'start' && (
          <GameView
            currentKana={currentKana}
            currentNumber={currentNumber}
            inputValue={inputValue}
            resetGame={resetGame}
            setInputValue={setInputValue}
            showNextNumber={showNextNumber}
            showResult={showResult}
            view={view}
          />
        )}
        <div className="fixed bottom-0 left-0 right-0">
          <a
            className="inline-block mb-2 border-b-2 border-gray-400 text-sm"
            href="https://github.com/jossdoe/kazoeru"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
