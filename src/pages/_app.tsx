import '@gossip/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { theme } from '../theme'
import { Provider } from 'react-redux'
import { persistor, store } from '@gossip/globals/store'
import AlertSnackbar from '@gossip/components/AlertSnackbar'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <AlertSnackbar />
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
