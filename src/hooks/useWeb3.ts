// Web3
import { useWeb3React } from '@web3-react/core';
import { ContractReceipt, ethers } from 'ethers';
import { abi as NFT_ABI } from '../utils/abis/NFT.json';
import { abi as ROUTER_ABI } from '../utils/abis/Router.json';

// Hooks
import { useModal } from '../contexts/ModalContext';
import { ROUTER_ADDRESS } from '../utils/web3';

// API
import { NFTType, Signature } from '../graphql/API';
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
    const { showErrorModal, discardModal }: Record<string, any> = useModal();

    // API
    const [generateSign] = useMutation(gql(generatedNonceSignature));
    const [streamToCeramic, { data: streamData }] = useMutation(
        gql(STREAM_MUTATION)
    );

    const checkNetwork = async () => {
        if (chainId !== 4) {
            showErrorModal("You're not using Rinkeby Network. Please switch.");

            try {
                await (window as any).ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x4' }],
                });

                discardModal();
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await (window as any).ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: '0x89',
                                    chainName: 'Polygon Network',
                                    rpcUrls: ['https://polygon-rpc.com/'],
                                    blockExplorerUrls: [
                                        'https://polygonscan.com/',
                                    ],
                                    nativeCurrency: {
                                        symbol: 'MATIC',
                                        decimals: 18,
                                    },
                                },
                            ],
                        });

                        discardModal();
                    } catch (addError) {
                        // handle "add" error
                        discardModal();
                        showErrorModal(
                            "Couldn't add Polygon Network to your Metamask. Try again later."
                        );
                        console.log(addError);
                    }
                }
            }
        }
    };

    const mintNFTContract = async (
        nftType: NFTType,
        badgeName: string,
        adminList: string[]
    ) => {
        await checkNetwork();

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
            (nftType as string) == 'Reward' ? 0 : 1
        );

        const contractReceipt: ContractReceipt = await deployTx.wait();

        console.log(contractReceipt);

        const event = contractReceipt.events?.find(
            (event) =>
                event.event ===
                `Mint${
                    nftType == NFTType.CONTRIBUTOR ? 'Contributor' : 'Reward'
                }NFT`
        );

        const nftAddr = event?.args?.['_address'];

        return nftAddr;
    };

    const issueCredential = async (credential: Record<string, any>) => {
        const { data: streamRes } = await streamToCeramic({
            variables: {
                data: JSON.stringify(credential),
            },
        });

        return streamRes.streamToCeramic.streamID;
    };

    const mintNFT = async (tokenAddress, credential) => {
        try {
            await checkNetwork();
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
        credentials: Record<string, any>[],
        addresses: string[]
    ) => {
        try {
            const tokenURIs = await Promise.all(
                credentials.map(
                    async (credential) => await issueCredential(credential)
                )
            );
            const provider = await library.getSigner();
            const contract = new ethers.Contract(
                tokenAddress,
                NFT_ABI,
                provider
            );
            await contract.retroactiveMint(addresses, tokenURIs, tokenURIs);
        } catch (err) {
            alert('ERROR HERE!');
        }
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
