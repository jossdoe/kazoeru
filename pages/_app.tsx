import PlausibleProvider from "next-plausible"
import "tailwindcss/tailwind.css"
import "../utils/styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="kazoeru.vercel.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
