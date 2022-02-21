import { CeramicClient } from '@ceramicnetwork/http-client';
import { DID } from 'dids';
import { getResolver as getKeyResolver } from 'key-did-resolver';
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver';
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

const CERAMIC_NODE = 'http://ceramic-node.mygateway.xyz:7007';

// Create a ThreeIdConnect connect instance as soon as possible in your app to start loading assets
const threeID = new ThreeIdConnect();

const authenticateWithEthereum = async (ethereumProvider, account: string) => {
    // Create an EthereumAuthProvider using the Ethereum provider and requested account
    const authProvider = new EthereumAuthProvider(ethereumProvider, account);
    // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
    // generate the authentication secret
    await threeID.connect(authProvider);

    const ceramic = new CeramicClient(CERAMIC_NODE);
    const did = new DID({
        // Get the DID provider from the 3ID Connect instance
        provider: threeID.getDidProvider(),
        resolver: {
            ...get3IDResolver(ceramic),
            ...getKeyResolver(),
        },
    });

    // Authenticate the DID using the 3ID provider yarn from 3ID Connect, this will trigger the
    // authentication flow using 3ID Connect and the Ethereum provider
    await did.authenticate();

    // The Ceramic client can create and update streams using the authenticated DID
    ceramic.did = did;

    (window as any).ceramic = ceramic;
    (window as any).did = did.id;
};

export const use3ID = (): void => {
    const { library, account, active } = useWeb3React();

    useEffect(() => {
        active &&
            account &&
            authenticateWithEthereum((window as any).ethereum, account);
    }, [active, account]);
};

export default use3ID;
