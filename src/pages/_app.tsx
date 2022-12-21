import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../style/global'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DIO Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
