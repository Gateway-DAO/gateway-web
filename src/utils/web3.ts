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
    4: '0x17eBdB004aEe7985f513Fc3d087A1C1F2d51aA64',
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
