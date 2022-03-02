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

export const ROUTER_ADDRESS = {
    4: '0x8487Cb6Bb3889DdF42aF75bB51F409bC79fE40D5',
    137: '',
};

/**
 * Makes an address smaller in size to be presented on Gateway's UI.
 *
 * @param {string} address
 * @param {number} start
 * @param {number} end
 * @returns {string} shortened address
 */
export const shortenAddress = (address: string, start = 4, end = 4): string => {
    return `${address?.slice(0, start)}...${address?.slice(
        address.length - end
    )}`;
};
