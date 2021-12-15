import * as Styled from './style'
import nft from '../../../../../../assets/nft.png'
import PfpBox from '../PfpBox'
const NftBadge = (props) => {
    return (
        <Styled.CardWrapper>
            <Styled.CardBox>
                <Styled.CardBanner src={nft} />
                <Styled.CardBody>
                    <Styled.CardBadge>NFT Badge</Styled.CardBadge>
                    <Styled.CardBadgeText>
                        Yearn.Design.Squad
                    </Styled.CardBadgeText>
                </Styled.CardBody>
            </Styled.CardBox>
            <Styled.PfpBox>
                <PfpBox text="4 People have claimed it" />
            </Styled.PfpBox>
        </Styled.CardWrapper>
    )
}

export default NftBadge
