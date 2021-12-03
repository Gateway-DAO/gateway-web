import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import { store } from './state/store'

/* Providers */
import { Provider } from 'react-redux'
import { ThemeProvider, GlobalTheme } from './theme'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { UserProvider } from './contexts/UserContext'

function getLibrary(provider, connector) {
    return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
    <Provider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
            <UserProvider>
                <ThemeProvider>
                    <GlobalTheme />
                    <App />
                </ThemeProvider>
            </UserProvider>
        </Web3ReactProvider>
    </Provider>,
    document.getElementById('root')
)
