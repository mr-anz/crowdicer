import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import '@/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import styled from '@emotion/styled'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)

  }, [])

  if (!showChild || typeof window === 'undefined') {
    return null
  } else {
    return (

      <Component {...pageProps} />

    )
  }
}
