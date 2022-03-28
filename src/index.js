import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.tsx';

/* AOS CSS animation */
import AOS from 'aos';
import 'aos/dist/aos.css';

/* Providers */
import { ThemeProvider, GlobalTheme } from './theme';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { UserProvider } from './contexts/UserContext';
import { ModalProvider } from './contexts/ModalContext';
import ApolloAppSyncProvider from './contexts/ApolloAppSyncProvider';
import { ReactNotifications } from 'react-notifications-component'

// Sentry
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Styling
import 'react-notifications-component/dist/theme.css'

// AWS
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// Analytics
import ReactGA from 'react-ga';

Amplify.configure(awsconfig);

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS || '');

AOS.init();

// Initialize Sentry
Sentry.init({
    dsn: "https://08ae49f058df40458896182ea0bc7805@o1179770.ingest.sentry.io/6292063",
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

function getLibrary(provider, connector) {
    return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
    <ApolloAppSyncProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
            <ThemeProvider>
                <ModalProvider>
                    <UserProvider>
                        <ReactNotifications />
                        <GlobalTheme />
                        <App />
                    </UserProvider>
                </ModalProvider>
            </ThemeProvider>
        </Web3ReactProvider>
    </ApolloAppSyncProvider>,
    document.getElementById('root')
);
