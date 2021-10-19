import { FiGlobe } from "react-icons/fi";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { FaDiscord, FaTwitter, FaMedium, FaGithub, FaLink } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { useWeb3React } from "@web3-react/core";
import { shortenAddress } from "../../utils/web3";
import { useEffect, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";
import Collapsible from "../Collapsible";
import * as Styled from "./style";
import { Link } from "react-router-dom";

const BigCard = (props) => {
  const web3 = useWeb3React();
  const [balance, setBalance] = useState(BigNumber.from(0));

  useEffect(() => {
    const getBalance = async (tokenAddress) =>
      web3.active &&
      web3.library &&
      setBalance(await web3.library.getBalance(tokenAddress));
    getBalance(props.tokenAddress);

    console.log(web3.library);
  }, [web3.active]);

  const socials = Object.keys(props.socials).map((key) => {
    switch (key) {
      case "discord":
        return (
          <Styled.Social>
            <FaDiscord />
            <Styled.SocialLink href={props.socials[key]} target="_blank">Discord</Styled.SocialLink>
          </Styled.Social>
        );
      case "twitter":
        return (
          <Styled.Social>
              <FaTwitter />
            <Styled.SocialLink href={props.socials[key]} target="_blank">Twitter</Styled.SocialLink>
          </Styled.Social>
        );
      case "website":
        return (
          <Styled.Social>
            <FiGlobe />
            <Styled.SocialLink href={props.socials[key]} target="_blank">Website</Styled.SocialLink>
          </Styled.Social>
        );
      case "medium":
        return (
          <Styled.Social>
            <FaMedium />
            <Styled.SocialLink href={props.socials[key]} target="_blank">Medium</Styled.SocialLink>
          </Styled.Social>
        );
      case "github":
        return (
          <Styled.Social>
            <FaGithub />
            <Styled.SocialLink href={props.socials[key]} target="_blank">GitHub</Styled.SocialLink>
          </Styled.Social>
        );
      case "chat":
        return (
          <Styled.Social>
            <BsChatTextFill />
            <Styled.SocialLink href={props.socials[key]}>Chat</Styled.SocialLink>
          </Styled.Social>
        );
      default:
        return (
          <Styled.Social>
            <FaLink />
            <Styled.SocialLink href={props.socials[key]}>{key.charAt(0).toUpperCase() + key.slice(1)}</Styled.SocialLink>
          </Styled.Social>
        );
    }
  });

  return (
    <Styled.Container>
      <Styled.CardBox>
        <Styled.CardBanner src={props.backgroundURL} />
        <Styled.CardContainer>
          <Styled.TokenInfo>
            <Styled.Logo src={props.logoURL} />
            <Styled.Title>{props.name}</Styled.Title>
            <Styled.Description>{props.description}</Styled.Description>
            <Styled.CategoryList>
              {props.categories.map((e) => (
                <Styled.Category>
                  <Styled.CategoryLink to={`/search/${e}`}>{e}</Styled.CategoryLink>
                </Styled.Category>
              ))}
            </Styled.CategoryList>
            <Styled.SocialsList>{socials}</Styled.SocialsList>
            <div>
              <Collapsible title="How to join?">
                <Styled.Description>
                  If you are a core team member or key contributor, please reach
                  out to Gateway via this form
                </Styled.Description>
              </Collapsible>
              <Collapsible title="Bounties">
                <Styled.Description>
                  If you are a core team member or key contributor, please reach
                  out to Gateway via this form
                </Styled.Description>
              </Collapsible>
              <Collapsible title="Governance Proposals">
                <Styled.Description>⚡️Snapshot integration coming soon.</Styled.Description>
              </Collapsible>
              <Collapsible title="Token Benefits/Utility">
                <Styled.Description>
                  If you are a core team member or key contributor, please reach
                  out to Gateway via this form
                </Styled.Description>
              </Collapsible>
              {props["related-daos"] &&
                <Collapsible title="Related DAOS">
                  {props["related-daos"].map((dao, idx) => {
                    return <Link to={`/dao/${dao}`}><Styled.Logo src={props.related[idx]} title={dao} /></Link>
                  })}
                </Collapsible>
              }
            </div>
          </Styled.TokenInfo>
          <Styled.TokenFeed>
            {web3.active && (
              <Styled.TokenHoldings>
                <Styled.Text>Your token holdings is <Styled.BalanceText>{balance.toNumber()} ${props.symbol.toUpperCase()}</Styled.BalanceText></Styled.Text>
              </Styled.TokenHoldings>
            )}
            <Styled.TokenName>${props.symbol.toUpperCase()}</Styled.TokenName>
            <Styled.PriceContainer>
              <Styled.TokenPrice>
                ${Number(props.tokenFeed.price).toFixed(2)}
              </Styled.TokenPrice>
              <Styled.PercentageText
                color={props.tokenFeed.change24h > 0 ? "#72B841" : "#EE787B"}
              >
                {props.tokenFeed.change24h > 0 ? (
                  <RiArrowUpSFill />
                ) : (
                  <RiArrowDownSFill />
                )}
                {props.tokenFeed.change24h.toLocaleString("en-US", {
                  maximumFractionDigits: 1,
                })}
                %
              </Styled.PercentageText>
              <Styled.Text color="#A5A5A5">24h</Styled.Text>
            </Styled.PriceContainer>
            <Styled.PastWeekContainer>
              <Styled.PercentageText
                color={props.tokenFeed.change7d > 0 ? "#72B841" : "#EE787B"}
              >
                {props.tokenFeed.change7d > 0 ? (
                  <RiArrowUpSFill />
                ) : (
                  <RiArrowDownSFill />
                )}
                {props.tokenFeed.change7d.toLocaleString("en-US", {
                  maximumFractionDigits: 1,
                })}
                %
              </Styled.PercentageText>
              <Styled.Text color="#A5A5A5">Past Week</Styled.Text>
            </Styled.PastWeekContainer>
            <Styled.TokenFeedData>
              <Styled.Text>All-time High</Styled.Text>
              <Styled.TextRight>
                {props.tokenFeed.ath.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Styled.TextRight>
              <Styled.Text>All-time Low</Styled.Text>
              <Styled.TextRight>
                {props.tokenFeed.atl.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Styled.TextRight>
              <Styled.Text>Market Cap</Styled.Text>
              <Styled.TextRight>
                {props.tokenFeed.marketCap.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Styled.TextRight>
              <Styled.Text>Current Supply</Styled.Text>
              <Styled.TextRight>
                {props.tokenFeed.circulatingSupply.toLocaleString("en-US")}
              </Styled.TextRight>
              <Styled.Text>Total Supply</Styled.Text>
              <Styled.TextRight>
                {props.tokenFeed.totalSupply.toLocaleString("en-US")}
              </Styled.TextRight>
              <Styled.Text>Contract</Styled.Text>
              <Styled.TextRight>{shortenAddress(props.tokenAddress, 3, 3)}</Styled.TextRight>
              <Styled.Text>Explorer</Styled.Text>
              <Styled.StyledExplorerLinkRight
                href={`https://etherscan.io/token/${props.tokenAddress}`}
              >
                Etherscan
              </Styled.StyledExplorerLinkRight>
            </Styled.TokenFeedData>
            <Styled.TradeButton
              href={`https://app.uniswap.org/#/swap?outputCurrency=${props.tokenAddress}&exactField=output`}
              target="_blank"
            >
              TRADE
            </Styled.TradeButton>
          </Styled.TokenFeed>
        </Styled.CardContainer>
      </Styled.CardBox>
    </Styled.Container>
  );
};

export default BigCard;
