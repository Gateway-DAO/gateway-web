import { InjectedConnector } from '@web3-react/injected-connector';

export const SUPPORTED_CHAINS = [
    1,
    3,
    4,
    5,
    6,
    137,
    ...(process.env.NODE_ENV == 'development' ? [1337, 31337] : []),
    80001,
];

export const CONNECTORS = {
    Injected: new InjectedConnector({ supportedChainIds: SUPPORTED_CHAINS }),
};

export const shortenAddress = (address, start = 4, end = 4) => {
    return `${address?.slice(0, start)}...${address?.slice(
        address.length - end
    )}`;
};
