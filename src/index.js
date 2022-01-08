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
import ApolloAppSyncProvider from './contexts/ApolloAppSyncProvider'

// AWS
import Amplify from 'aws-amplify'
//import { Amplify } from '@aws-amplify/core'
//import { Auth } from '@aws-amplify/auth'
//import { Storage } from '@aws-amplify/storage'
import awsconfig from './aws-exports'

// MIGRATION - run once
import { runDAOMigration, runUserMigration, runUserPFPMigration } from './utils/aws-migration'

window.runDAOMigration = () => runDAOMigration()
window.runUserMigration = () => runUserMigration()
window.runUserPFPMigration = () => runUserPFPMigration()

Amplify.configure(awsconfig)
// Auth.configure(awsconfig)
// Storage.configure(awsconfig)

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
