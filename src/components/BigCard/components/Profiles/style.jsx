import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export const Container = styled.main`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 0fr 8fr 0.08fr;

    @media only screen and (max-width: 945px) {
        padding-top: 60px;
    }
`;

export const DAOContainer = styled.div`
    grid-column: 2 / 3;
    display: grid;
    grid-template-rows: 1fr auto;
`;

export const DivideContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 20px;

    @media only screen and (max-width: 1030px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ColumnOne = styled.div`
    grid-column: ${(props) => (props.fullWidth ? '1 / 9' : '1 / span 5')};
    // grid-column: 1 / span 5;
    margin-bottom: 60px;
`;

export const Description = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 34px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #e5e5e5;

    margin-top: 10px;
    margin-bottom: 70px;

    display: flex;
    flex-direction: column;
    text-direction: left;
    align-items: flex-start;

    @media only screen and (max-width: 300px) {
        font-size: 10px;
    }
`;

export const MemberContainer = styled.div`
    border: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
        90deg,
        #ff00b8 0%,
        #7e3bdc 50.52%,
        #0075ff 100%
    );
    border-radius: 5px;
    margin-top: 15px;
    padding: 10px;
    display: flex;
    flex-direction: row;
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    /* or 233% */

    letter-spacing: 0.05em;

    color: ${(props) => props.color || '#7E7586'};

    @media only screen and (max-width: 1190px) {
        font-size: 11px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 10px;
    }
`;

export const SubText = styled.h4`
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    /* or 233% */

    letter-spacing: 0.05em;

    letter-spacing: 0.05em;

    color: ${(props) => props.color || '#170627'};

    @media only screen and (max-width: 1190px) {
        font-size: 11px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 10px;
    }
`;

// categories section

export const CategoryList = styled.ul`
    margin: 15px 0;
    @media only screen and (max-width: 380px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;

export const Category = styled.li`
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-sizing: border-box;
    display: inline-block;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #e5e5e5;

    padding: 2px 6px;
    margin-right: 10px;

    @media only screen and (max-width: 380px) {
        margin: 5px;
    }
`;

export const CategoryLink = styled(Link)`
    text-decoration: none;
    color: #170627;
`;

// social handle of Daos

export const SocialsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px 0;
    grid-row-gap: 10px;

    border-top: 1px solid rgba(229, 229, 229, 0.5);
    border-bottom: 1px solid rgba(229, 229, 229, 0.5);

    @media only screen and (max-width: 380px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const Social = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 10px;

    @media only screen and (max-width: 1190px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 980px) {
        flex-direction: column;
    }
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

export const YoutubeVideoContainer = styled.div`
    margin: auto;
    padding: 5px;
    width: 100%;
    margin-bottom: 50px;
`;

export const ColumnTwo = styled.div`
    grid-column: 7 / span 2;
    padding-left: 20px;
    margin-right: -10px;
    position: relative;
    margin-bottom: 60px;
    margin-top: 15px;

    @media only screen and (max-width: 1190px) {
        padding-left: 10px;
        margin-right: -40px;
    }

    @media only screen and (max-width: 1030px) {
        border-left: 0;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        justify-content: center;
        margin: 0 -20px;
    }
`;

//  modal seciton starts from here

//div container

export const DivContainer = styled.div`
    margin-top: 10px;
`;

export const Button = styled.a`
    background: #180b27;
    border: 1px solid rgba(255, 255, 255, 0.2);
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

    color: #ffffff;

    text-decoration: none;
    padding: 10px;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`;

export const CollapsibleChildren = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

// second column  styling

export const LinkTo = styled(Button)`
    border: none;
    font-family: Be Vietnam;
    text-transform: none;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    text-align: left;
    padding: 1px;
    letter-spacing: 0.05em;

    color: ${(props) => props.color || '#170627'};
`;

export const PastWeekContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PercentageText = styled(Text)`
    margin-right: 5px;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ShareColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ExplorerLink = (props) => (
    <a
        className={props.className}
        href={props.href}
        target={props.target || '_blank'}
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
    color: #e5e5e5;
`;

export const SubDAOContainer = styled.div`
    margin-top: 20px;
`;

export const SubDAOImg = styled.img`
    border: 1px solid #e5e5e5;
    border-radius: 100%;
    margin-bottom: 20px;
    width: 50px;
    background-color: white;
`;

export const TextRight = styled(Text)`
    text-align: right;
    color: #e5e5e5;
`;

export const Title = styled.h1`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #ffffff;

    margin-bottom: 15px;

    @media only screen and (max-width: 300px) {
        font-size: 14px;
    }
`;

export const TokenFeed = styled.div`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

export const TokenFeedData = styled.div`
    margin-top: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const TokenName = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    /* or 117% */

    letter-spacing: 0.05em;

    color: #e5e5e5;
`;

export const TokenPrice = styled.h3`
    font-family: Be Vietnam;
    font-style: normal;
    //font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    /* or 117% */

    letter-spacing: 0.05em;

    color: #e5e5e5;
`;

export const TradeButton = styled(Button)`
    margin-top: 48px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #e5e5e5;
`;

// export const AboutDAOInfo = styled
