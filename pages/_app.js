import '../styles/globals.css'
import Head from 'next/head'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ZENSPACE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider
        appId="JyNlfi2EVXAUDiDGLueV3pFdq7poP2Id753sgZZP"
        serverUrl="https://snvwuvky9raz.usemoralis.com:2053/server"
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  )
}

export default MyApp
