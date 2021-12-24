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

// MIGRATION - run once
import { runDAOMigration, runUserMigration } from './utils/aws-migration'
import ApolloAppSyncProvider from './contexts/ApolloAppSyncProvider'

window.runDAOMigration = () => runDAOMigration()
window.runUserMigration = () => runUserMigration()

function getLibrary(provider, connector) {
    return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
    <ApolloAppSyncProvider>
        <ReduxProvider store={store}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <UserProvider>
                    <ThemeProvider>
                        <GlobalTheme />
                        <App />
                    </ThemeProvider>
                </UserProvider>
            </Web3ReactProvider>
        </ReduxProvider>
    </ApolloAppSyncProvider>,
    document.getElementById('root')
)
