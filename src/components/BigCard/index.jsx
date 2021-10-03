import styled from "styled-components";

const CardBox = styled.div`
    background-color: white;
    border-radius: 20px;
    margin: 0 40px;
    margin-top: 60px;
    padding: 50px;
`

const CardBanner = styled.img`

`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 20px;
`

const TokenInfo = styled.div`
    grid-column: 1 / span 6;
    margin-right: 30px;
`

const TokenFeed = styled.div`
    grid-column: 7 / span 3;
    border-left: 1px solid rgba(229, 229, 229, 0.5);
    padding-left: 20px;
`

const TokenFeedData = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Title = styled.h1`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    align-items: center;

    color: #170627;
`

const Subtitle = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    align-items: center;

    color: #170627;
`

const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.05em;

    color: #170627;
`

const TextRight = styled(Text)`text-align: right;`

const TokenName = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    letter-spacing: 0.05em;

    color: #170627;
`

const TokenPrice = styled.h3`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    letter-spacing: 0.05em;

    color: #170627;
`

const BigCard = props => {
    return (
        <CardBox>
            <CardBanner />
            <CardContainer>
                <TokenInfo>
                    <Title>{props.name}</Title>
                    <Text>{props.description}</Text>
                </TokenInfo>
                <TokenFeed>
                    <TokenName>${props.symbol.toUpperCase()}</TokenName>
                    <TokenPrice>${props.tokenFeed.price}</TokenPrice>
                    <TokenFeedData>
                        <Text>All-time High:</Text>
                        <TextRight>${props.tokenFeed.ath}</TextRight>
                        <Text>All-time Low:</Text>
                        <TextRight>${props.tokenFeed.atl}</TextRight>
                        <Text>Market Capitalization:</Text>
                        <TextRight>${props.tokenFeed.marketCap}</TextRight>
                        <Text>Current Supply:</Text>
                        <TextRight>{props.tokenFeed.circulatingSupply}</TextRight>
                        <Text>Total Supply:</Text>
                        <TextRight>{props.tokenFeed.totalSupply}</TextRight>
                        <Text>Contract:</Text>
                        <TextRight>{props.tokenFeed.marketCap}</TextRight>
                    </TokenFeedData>
                </TokenFeed>
            </CardContainer>
        </CardBox>
    )
}

export default BigCard;