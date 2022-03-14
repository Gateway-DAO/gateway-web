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

export const ROUTER_ADDRESS = {
    4: '0x3F9Ad56D3245619eDc373C252E74432D7D667Cf2',
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
