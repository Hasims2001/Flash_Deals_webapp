import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ContextApi} from "../context/ContextApi"
export default function App({ Component, pageProps }: AppProps) {
  return <ContextApi><Component {...pageProps} /></ContextApi>
}
