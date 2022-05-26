const contractABI_POLYGON = require('../ABI/CredentialNFT-polygon.json');
const contractABI_AVAX = require('../ABI/CredentialNFT-avax.json');
const contractABI_ETHEREUM = require('../ABI/CredentialNFT-ethereum.json');

export const CONTRACT_ABI = {
	polygon: contractABI_POLYGON,
	avax: contractABI_AVAX,
	ethereum: contractABI_ETHEREUM
};

export const ADDRESS = {
	// polygon: '0x6907BcD83B85De590666705ae43C158FAFe4439F', // multiple mintable address
	polygon: '0x172a2c82d4bb54931397Ab5e16bf897960Bcc184',
	avax: '0xb49A07A8F8D840cCFBf898B4438af801dFeCfFF1',
	ethereum: '0xa437139a60e842954d56e897102fb92c3641Ba30'
};

export const PROVIDER = {
	// polygon: 'https://rpc-mainnet.maticvigil.com',
	polygon: 'https://matic-mumbai.chainstacklabs.com',
	// avax: 'https://api.avax.network/ext/bc/C/rpc',
	avax: 'https://api.avax-test.network/ext/bc/C/rpc',
	// ethereum: 'https://mainnet.infura.io/v3/',
	ethereum: 'https://rinkeby.infura.io/v3/'
};

export const CHAIN_ID = {
	// polygon: 137,
	polygon: 80001,
	// avax: 43114,
	avax: 43113,
	// ethereum: 1,
	ethereum: 4
};

export const BICONOMY_API_KEY =
	'DCQRszfL6.a31cd8c7-ed05-4d9d-b6a8-88f4f38f0d1d';


