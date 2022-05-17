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

// Styling
import 'react-notifications-component/dist/theme.css';

// AWS
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// Analytics
import { BrowserRouter } from 'react-router-dom';

Amplify.configure(awsconfig);

Sentry.init({
    dsn: 'https://d0480028c21c460c89f2c88ee3221064@o1250209.ingest.sentry.io/6414301',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

// ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS || '');

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
