import * as Styled from './style';
import { useWeb3React } from '@web3-react/core';
import useGetNFTs from '../../../../hooks/useGetNFTs';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../contexts/UserContext';
import { useGetGateStatusByUserID } from '../../../../api/database/useGetGateStatus';

const AddExperience = () => {
    const { library, account } = useWeb3React();
    const { userInfo } = useAuth();
    const { getNFTs } = useGetNFTs();
    const [nfts, setNFTs] = useState([]);

    const { data } = useGetGateStatusByUserID(userInfo?.id, {
        filter: {
            status: {
                eq: 'COMPLETED',
            },
        },
    });

    const mintHandler = async (gs) => {
        alert("Doesn't do shit"); // TODO: remove this for God's sake
    };

    useEffect(() => {
        getNFTs().then((nfts) => {
            console.log(nfts);
            setNFTs(nfts);
        });
    }, []);

    return (
        <Styled.BoxContainer>
            {/*
            <Styled.BoxText>
                Add your Experience and Contributions.{' '}
            </Styled.BoxText>
            <Styled.ButtonBox to="/profile/add-experience">
                <Styled.ButtonText>ADD NOW</Styled.ButtonText>
            </Styled.ButtonBox>
            */}

            <Styled.NFTContainer>
                {nfts &&
                    nfts.map((nft) => {
                        if (nft.metadata.image) {
                            return (
                                <Styled.NFTBox>
                                    <Styled.NFT
                                        src={nft.metadata.image}
                                        alt={nft.metadata.title}
                                    />
                                    <Styled.ButtonText>
                                        {nft.metadata.title}
                                    </Styled.ButtonText>
                                </Styled.NFTBox>
                            );
                        }

                        return null;
                    })}
            </Styled.NFTContainer>

            {data?.getGateStatusByUserID &&
                data?.getGateStatusByUserID?.items?.map((gs) => {
                    return (
                        <Styled.ButtonBox to='' onClick={() => mintHandler(gs)}>
                            <Styled.ButtonText>
                                Mint badge - {gs.gate.badge.name}
                            </Styled.ButtonText>
                        </Styled.ButtonBox>
                    );
                })}
        </Styled.BoxContainer>
    );
};

export default AddExperience;
