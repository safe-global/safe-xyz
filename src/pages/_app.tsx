import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import PageLayout from '@/components/common/PageLayout'
import { theme } from '@/styles/theme'
import '@/styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const App = ({ Component, pageProps }: AppProps & { Component: NextPageWithLayout }) => {
  // Use the layout defined at the page level, if available or the default layout
  const getLayout = Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
