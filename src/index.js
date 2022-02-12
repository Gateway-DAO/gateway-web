import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import { store } from './state/store'

/* Providers */
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider, GlobalTheme } from './theme'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { UserProvider } from './contexts/UserContext'
import { ModalProvider } from './contexts/ModalContext'
import ApolloAppSyncProvider from './contexts/ApolloAppSyncProvider'

// AWS
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

function getLibrary(provider, connector) {
    return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
    <ApolloAppSyncProvider>
        <ReduxProvider store={store}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <ThemeProvider>
                    <ModalProvider>
                        <UserProvider>
                            <GlobalTheme />
                                <App />
                        </UserProvider>
                    </ModalProvider>
                </ThemeProvider>
            </Web3ReactProvider>
        </ReduxProvider>
    </ApolloAppSyncProvider>,
    document.getElementById('root')
)
