import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../style/global'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DIO Clone</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
