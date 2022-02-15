/**
 * Gets token data from CoinGecko
 *
 * @param {string} address
 * @returns {JSON} token
 */
export const getTokenFromAddress = async (address) => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}`
    );
    const json = await res.json();

    return json;
};
