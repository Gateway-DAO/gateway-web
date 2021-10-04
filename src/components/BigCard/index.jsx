import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { RiArrowUpSFill, RiArrowDownSFill} from "react-icons/ri";

import { shortenAddress } from "../../utils/web3";

const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
`

const CardBox = styled.div`
    background-color: white;
    border-radius: 20px;
    margin: 0 40px;
    margin-top: 60px;
    padding: 50px;
    grid-column: 2 / 3;
    position: relative;
`

const CardBanner = styled.img`
    position: relative;
    width: calc(100% + 100px);
    top: -50px;
    left: -50px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 20px;
`

const TokenInfo = styled.div`
    grid-column: 1 / span 5;
    margin-right: 30px;
`

const TokenFeed = styled.div`
    grid-column: 6 / span 3;
    border-left: 1px solid rgba(229, 229, 229, 0.5);
    padding-left: 20px;
`

const TokenFeedData = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const PastWeekContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Title = styled.h1`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #170627;

    margin-bottom: 15px;
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

const Description = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #170627;

    margin-bottom: 15px;
`

const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    /* or 233% */

    letter-spacing: 0.05em;

    color: ${props => props.color || "#170627"};
`

const PercentageText = styled(Text)`
    margin-right: 5px;
`

const TextRight = styled(Text)`text-align: right;`

const ExplorerLink = props => <a className={props.className} href={props.href} target={props.target || "_blank"}>{props.children}<FiArrowUpRight /></a>;

const StyledExplorerLink = styled(ExplorerLink)`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    /* or 233% */

    letter-spacing: 0.05em;

    color: #170627;
`

const StyledExplorerLinkRight = styled(StyledExplorerLink)`text-align: right;`

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

const CategoryList = styled.ul`
    margin-bottom: 15px;
`

const Category = styled.li`
    border: 1px solid #170627;
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-block;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #170627;

    padding: 2px 6px;
    margin-right: 10px;
`

const BigCard = props => {
    return (
        <Container>
            <CardBox>
                <CardBanner src="https://uniswap.org/static/147dde1dd5e18705f26c7304e44ff1dc/7f945/banner.jpg" />
                <CardContainer>
                    <TokenInfo>
                        <Title>{props.name}</Title>
                        <Description>{props.description}</Description>
                        <CategoryList>
                            {props.categories.map(e => <Category>{e}</Category>)}
                        </CategoryList>
                    </TokenInfo>
                    <TokenFeed>
                        <TokenName>${props.symbol.toUpperCase()}</TokenName>
                        <PriceContainer>
                            <TokenPrice>${props.tokenFeed.price}</TokenPrice>
                            <PercentageText color={props.tokenFeed.change24h > 0 ? "#72B841" : "#EE787B"}>
                                {props.tokenFeed.change24h > 0 ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                                {props.tokenFeed.change24h.toLocaleString("en-US", { maximumFractionDigits: 1 })}%
                            </PercentageText>
                            <Text color="#A5A5A5">24h</Text>
                        </PriceContainer>
                        <PastWeekContainer>
                            <PercentageText color={props.tokenFeed.change7d > 0 ? "#72B841" : "#EE787B"}>
                                {props.tokenFeed.change7d > 0 ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                                {props.tokenFeed.change7d.toLocaleString("en-US", { maximumFractionDigits: 1 })}%
                            </PercentageText>
                            <Text color="#A5A5A5">Past Week</Text>
                        </PastWeekContainer>
                        <TokenFeedData>
                            <Text>All-time High</Text>
                            <TextRight>{props.tokenFeed.ath.toLocaleString("en-US", { style: "currency", currency: "USD" })}</TextRight>
                            <Text>All-time Low</Text>
                            <TextRight>{props.tokenFeed.atl.toLocaleString("en-US", { style: "currency", currency: "USD" })}</TextRight>
                            <Text>Market Cap</Text>
                            <TextRight>{props.tokenFeed.marketCap.toLocaleString("en-US", { style: "currency", currency: "USD" })}</TextRight>
                            <Text>Current Supply</Text>
                            <TextRight>{props.tokenFeed.circulatingSupply.toLocaleString("en-US")}</TextRight>
                            <Text>Total Supply</Text>
                            <TextRight>{props.tokenFeed.totalSupply.toLocaleString("en-US")}</TextRight>
                            <Text>Contract</Text>
                            <TextRight>{shortenAddress(props.tokenAddress, 3, 3)}</TextRight>
                            <Text>Explorer</Text>
                            <StyledExplorerLinkRight href={`https://etherscan.io/token/${props.tokenAddress}`}>Etherscan</StyledExplorerLinkRight>
                        </TokenFeedData>
                    </TokenFeed>
                </CardContainer>
            </CardBox>
        </Container>
    )
}

export default BigCard;