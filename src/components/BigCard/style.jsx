import styled from "styled-components";
import Collapsible from "react-collapsible";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`;

export const CardBox = styled.div`
  background-color: white;
  border-radius: 20px;
  margin: 0 40px;
  margin-top: 60px;
  padding: 50px;
  grid-column: 2 / 3;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const CardBanner = styled.div`
  position: relative;
  width: calc(100% + 100px);
  top: -50px;
  left: -50px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 40vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 20px;
`;

export const Logo = styled.img`
  border: 1px solid #e5e5e5;
  border-radius: 100%;
  margin-bottom: 20px;
  width: 100px;
  background-color: white;
`;

export const TokenInfo = styled.div`
  grid-column: 1 / span 5;
  margin-right: 30px;
  position: relative;
  top: -100px;
`;

export const TokenFeed = styled.div`
  grid-column: 6 / span 3;
  border-left: 1px solid rgba(229, 229, 229, 0.5);
  padding-left: 20px;

  position: relative;
`;

export const TokenFeedData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PastWeekContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;

  color: #170627;

  margin-bottom: 15px;
`;

export const Subtitle = styled.h2`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  align-items: center;

  color: #170627;
`;

export const Description = styled.p`
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
`;

export const Text = styled.p`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 28px;
  /* or 233% */

  letter-spacing: 0.05em;

  color: ${(props) => props.color || "#170627"};
`;

export const StyledCollapsible = styled(Collapsible)`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  align-items: center;

  color: #170627;

  margin: 20px 0;
`;

export const PercentageText = styled(Text)`
  margin-right: 5px;
`;

export const TextRight = styled(Text)`
  text-align: right;
`;

export const ExplorerLink = (props) => (
  <a
    className={props.className}
    href={props.href}
    target={props.target || "_blank"}
  >
    {props.children}
    <FiArrowUpRight />
  </a>
);

export const StyledExplorerLink = styled(ExplorerLink)`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 28px;
  /* or 233% */

  letter-spacing: 0.05em;

  color: #170627;
`;

export const StyledExplorerLinkRight = styled(StyledExplorerLink)`
  text-align: right;
`;

export const TokenName = styled.h2`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  letter-spacing: 0.05em;

  color: #170627;
`;

export const TokenPrice = styled.h3`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  letter-spacing: 0.05em;

  color: #170627;
`;

export const CategoryList = styled.ul`
  margin-bottom: 15px;
`;

export const Category = styled.li`
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
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #170627;
`;

export const SocialsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 0;
  grid-row-gap: 10px;

  border-top: 1px solid rgba(229, 229, 229, 0.5);
  border-bottom: 1px solid rgba(229, 229, 229, 0.5);
`;

export const Social = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SocialLink = styled.a`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  color: #170627;

  text-decoration: none;

  margin-left: 5px;
`;

export const TokenHoldings = styled.div`
  border: 1px solid #7E3BDC;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const BalanceText = styled.span`
  font-weight: bold;
  color: #7E3BDC;
`;

export const TradeButton = styled.a`
  background: #ffffff;
  border: 1px solid #a5a5a5;
  box-sizing: border-box;
  border-radius: 20px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #170627;

  text-decoration: none;

  padding: 10px;
  margin-top: 20px;
  width: calc(100% - 20px);
  position: absolute;

  &:hover {
    cursor: pointer;
  }
`;
