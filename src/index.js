import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.tsx';

/* AOS CSS animation */
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

/* Providers */
import { ThemeProvider, GlobalTheme } from './theme';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { UserProvider } from './contexts/UserContext';
import { ModalProvider } from './contexts/ModalContext';
import ApolloAppSyncProvider from './contexts/ApolloAppSyncProvider';
import { ReactNotifications } from 'react-notifications-component';
import { BrowserRouter } from 'react-router-dom';

// Styling
import 'react-notifications-component/dist/theme.css';

AOS.init();

function getLibrary(provider, connector) {
    return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
    <ApolloAppSyncProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
            <ThemeProvider>
                <ModalProvider>
                    <BrowserRouter>
                        <UserProvider>
                            <ReactNotifications />
                            <GlobalTheme />
                            <App />
                        </UserProvider>
                    </BrowserRouter>
                </ModalProvider>
            </ThemeProvider>
        </Web3ReactProvider>
    </ApolloAppSyncProvider>,
    document.getElementById('root')
);
