import { useEffect, useState } from 'react';
import { create } from 'ipfs-http-client'
import { Biconomy } from '@biconomy/mexa';
import { useQuery, gql } from '@apollo/client';
import { getCredential } from '../../graphql/queries';
import { useParams } from 'react-router-dom';
import './CredentialMint.css';

const contractABI = require('../../ABI/CredentialNFT.json');
const contractAddress = '0xe04363f300A51435f68d9b023105FD01Aa05D023';
const Web3 = require('web3');
const biconomyApiKey = 'vAJ4ULGKl.270974d4-fafe-47f6-bca6-e806590bfdf2';
const mumbaiProvider = new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com");
const biconomy = new Biconomy(mumbaiProvider, {
  walletProvider: window.ethereum,
  apiKey: biconomyApiKey,
  debug: true
});
const web3 = new Web3(biconomy);
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

const ipfsClient = create('https://ipfs.infura.io:5001/api/v0');
export const Minter = () => {
  const { id } = useParams();
  const {
    data,
    loading: credentialLoading,
    error: credentialError,
  } = useQuery(gql(getCredential), {
    variables: {
      id,
    },
  });
  const walletAddress = data.getCredential.target.wallet;
  const daoName = data.getCredential.organization.name;
  const credentialName = data.getCredential.name;
  const description = data.getCredential.description;
  const imageUrl = `https://gateway.pinata.cloud/ipfs/${data.getCredential.image}`;
  const [metaDataURI, setMetaDataURI] = useState(``)

  useEffect(async () => {
    biconomyInit();
    ipfsConfig();
  }, []);

  function biconomyInit() {
    biconomy.onEvent(biconomy.READY, () => {
    }).onEvent(biconomy.ERROR, (err, msg) => {
      console.log(err);
    });
  }
  async function ipfsConfig(e) {
    try {
      const fileDetails = JSON.stringify({
        daoName: daoName,
        credentialName: credentialName,
        description: description,
        image: imageUrl
      })

      const ipfsHashInfo = await ipfsClient.add(fileDetails);
      const ipfsCIDHASH = ipfsHashInfo.cid.toString()
      const ipfsUrl = `https://ipfs.io/ipfs/${ipfsCIDHASH}`
      console.log({ ipfsUrl });
      setMetaDataURI(ipfsUrl)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function mintNFT(to, tokenURI) {
    try {
      const res = contractInstance.methods
        .mint(to, tokenURI)
        .send({ from: to });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const onMintPressed = async () => {
    if (metaDataURI === "") {
      alert("Please click 'Create NFT' first.");
    } else {
      try {
        await mintNFT(walletAddress, metaDataURI);
      }
      catch (e) {
        console.log(e);
        alert(e);
      }
    }
  };

  return (
    <div className="Minter">
      <button id="mintButton" className="mt-4" onClick={onMintPressed}>
        NFT MINT
      </button>
    </div>
  );
};

