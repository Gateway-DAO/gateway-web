// Web3
import { useWeb3React } from '@web3-react/core';
import { ContractReceipt, ethers } from 'ethers';
import { abi as NFT_ABI } from '../utils/abis/NFT.json';
import { abi as ROUTER_ABI } from '../utils/abis/Router.json';

// Hooks
import { useModal } from '../contexts/ModalContext';
import { ROUTER_ADDRESS } from '../utils/web3';

// API
import { Signature } from '../graphql/API';
import { gql, useMutation } from '@apollo/client';
import {
    generatedNonceSignature,
    streamToCeramic as STREAM_MUTATION,
} from '../graphql/mutations';

/* Creating a type that can be used to represent a NFT. */
enum NFT {
    CONTRIBUTOR = 'Contributor',
    REWARD = 'Reward',
}

export const useWeb3 = () => {
    // Hooks
    const { account, library, chainId } = useWeb3React();
    const { showErrorModal }: Record<string, any> = useModal();

    // API
    const [generateSign] = useMutation(gql(generatedNonceSignature));
    const [streamToCeramic, { data: streamData }] = useMutation(
        gql(STREAM_MUTATION)
    );

    const checkNetwork = () => {
        if (chainId !== 137) {
            showErrorModal("You're not using Polygon Network. Please switch.");
        }
    };

    const mintNFTContract = async (
        NFTType: NFT,
        badgeName: string,
        adminList: string[]
    ) => {
        checkNetwork();
        // Get minting authorization
        const { data: signData } = await generateSign();

        const signature: Signature = signData.generatedNonceSignature;

        const signer = await library.getSigner();

        const contract = new ethers.Contract(
            ROUTER_ADDRESS[chainId],
            ROUTER_ABI,
            signer
        );

        console.log(signature);

        const deployTx = await contract.deployNFT(
            badgeName,
            'GATENFT',
            '',
            adminList,
            true,
            signature.signature,
            signature.message,
            (NFTType as string) == 'Reward' ? 0 : 1
        );

        const contractReceipt: ContractReceipt = await deployTx.wait();

        console.log(contractReceipt);

        const event = contractReceipt.events?.find(
            (event) => event.event === `Mint${NFTType}NFT`
        );

        const nftAddr = event?.args?.['_address'];

        return nftAddr;
    };

    const issueCredential = async (credential) => {
        await streamToCeramic({
            variables: {
                data: credential,
            },
        });

        return streamData; // TODO: fix this
    };

    const mintNFT = async (tokenAddress, credential) => {
        try {
            checkNetwork();
            const tokenURI = issueCredential(credential);
            const provider = await library.getSigner();
            const contract = new ethers.Contract(
                tokenAddress,
                NFT_ABI,
                provider
            );
            await contract.mint(account, tokenURI);
        } catch (err) {
            alert('An error occurred!');
            console.log(err);
        }
    };

    const batchMint = async (
        tokenAddress: string,
        credentials: (Record<string, any> | string)[],
        addresses: string[]
    ) => {
        const tokenURIs = await Promise.all(
            credentials.map(
                async (credential) => await issueCredential(credential)
            )
        );
        const provider = await library.getSigner();
        const contract = new ethers.Contract(tokenAddress, NFT_ABI, provider);
        await contract.batch_mint(addresses, tokenURIs, addresses.length);
    };

    return {
        checkNetwork,
        mintNFTContract,
        issueCredential,
        mintNFT,
        batchMint,
    };
};

export default useWeb3;
