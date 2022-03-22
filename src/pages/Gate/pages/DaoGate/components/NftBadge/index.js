import * as Styled from './style';

const NftBadge = ({ nft }) => {
    return (
        <Styled.CardWrapper>
            <Styled.CardBox>
                <Styled.CardBanner
                    src={`https://gateway.pinata.cloud/ipfs/${nft.ipfsURL}`}
                />
                <Styled.CardBody>
                    <Styled.CardBadge>Badge</Styled.CardBadge>
                    <Styled.CardBadgeText>
                        {nft.name.slice(0, 24) +
                            (nft.name.length > 24 ? '...' : '')}
                    </Styled.CardBadgeText>
                </Styled.CardBody>
            </Styled.CardBox>
        </Styled.CardWrapper>
    );
};

export default NftBadge;
