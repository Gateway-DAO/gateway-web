import * as Styled from './style'
import nft from '../../../../../../assets/nft.png'
const NftBadge = (props) => {
    return (
        <Styled.CardWrapper>
            <Styled.CardBox>
                <Styled.CardBanner src={nft} />
                <Styled.CardBody>
                    <Styled.CardBadge>NFT Badge</Styled.CardBadge>
                    <Styled.CardBadgeText>DAO Finanace for beginners</Styled.CardBadgeText>
                </Styled.CardBody>
            </Styled.CardBox>
        </Styled.CardWrapper>
    )
}

export default NftBadge
