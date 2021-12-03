import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Container = styled.main`
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;

    @media only screen and (max-width: 945px) {
        padding-top: 60px;
    }
`

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

    @media only screen and (max-width: 1190px) {
        padding: 70px;
    }

    @media only screen and (max-width: 650px) {
        padding: 35px;
    }

    @media only screen and (max-width: 435px) {
        margin: 0 auto;
        margin-top: 60px;
        padding: 20px;
    }
`

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

    @media only screen and (max-width: 1190px) {
        width: calc(100% + 140px);
        top: -70px;
        left: -70px;
    }

    @media only screen and (max-width: 1030px) {
        height: 20vh;
    }

    @media only screen and (max-width: 650px) {
        width: calc(100% + 70px);
        top: -35px;
        left: -35px;
        height: 20vh;
    }

    @media only screen and (max-width: 435px) {
        width: calc(100% + 40px);
        top: -20px;
        left: -20px;
        height: 15vh;
    }

    @media only screen and (max-width: 350px) {
        width: calc(100% + 40px);
        top: -20px;
        left: -20px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 20px;

    @media only screen and (max-width: 1030px) {
        display: flex;
        flex-direction: column;
    }
`

export const Logo = styled.img`
    border: 1px solid #e5e5e5;
    border-radius: 100%;
    margin-bottom: 20px;
    width: 100px;
    background-color: white;

    @media only screen and (max-width: 1190px) {
        border-radius: 100%;
        margin-top: -20px;
    }

    @media only screen and (max-width: 650px) {
        margin-top: 30px;
        width: 80px;
    }

    @media only screen and (max-width: 435px) {
        margin-top: 45px;
        width: 70px;
    }

    @media only screen and (max-width: 350px) {
        margin-top: 45px;
        margin-left: -10px;
        width: 60px;
    }
`

export const ColumnOne = styled.div`
    grid-column: ${(props) => (props.fullWidth ? '1 / 9' : '1 / span 5')};
    margin-right: 30px;
    position: relative;
    top: -100px;

    @media only screen and (max-width: 1190px) {
        margin-right: 0;
        margin-left: -35px;
    }

    @media only screen and (max-width: 1030px) {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        margin: 0 auto;
        justify-content: center;
    }

    @media only screen and (max-width: 350px) {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin: 0 auto;
        justify-content: center;
    }
`

export const ColumnTwo = styled.div`
    grid-column: 6 / span 3;
    border-left: 1px solid rgba(229, 229, 229, 0.5);
    padding-left: 20px;
    margin-right: -10px;
    position: relative;

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
`

export const TokenFeed = styled.div`
    ${(props) =>
        props.showBorderBottom
            ? 'border-bottom: 1px solid rgba(229, 229, 229, 0.5);'
            : ''}
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export const TokenFeedData = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const PastWeekContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const DaoProfileContainer = styled.div`
    display: flex;
    margin-top: -7%;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 15px;
`

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
`
//  profile header section
export const ProfileAndFeedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
`

export const ProfileDiv = styled.div`
    display: flex;
`

export const Profile = styled.h2`
    /* background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent; */
    margin-right: 15px;
    font-family: Poppins;
    font-style: normal;
    /* font-weight: bold; */
    font-size: 18px;
    line-height: 40px;
`

export const Subtitle = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    align-items: center;

    color: #170627;

    @media only screen and (max-width: 300px) {
        font-size: 14px;
    }
`

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

    @media only screen and (max-width: 300px) {
        font-size: 10px;
    }
`

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    /* or 233% */

    letter-spacing: 0.05em;

    color: ${(props) => props.color || '#170627'};

    @media only screen and (max-width: 1190px) {
        font-size: 11px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 10px;
    }
`

export const StyledCollapsible = styled(Collapsible)`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    align-items: center;

    color: #170627;

    margin: 20px 0;
`

export const PercentageText = styled(Text)`
    margin-right: 5px;
`

export const TextRight = styled(Text)`
    text-align: right;
`

export const ExplorerLink = (props) => (
    <a
        className={props.className}
        href={props.href}
        target={props.target || '_blank'}
    >
        {props.children}
        <FiArrowUpRight />
    </a>
)

export const StyledExplorerLink = styled(ExplorerLink)`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    /* or 233% */

    letter-spacing: 0.05em;

    color: #170627;
`

export const StyledExplorerLinkRight = styled(StyledExplorerLink)`
    text-align: right;
`

export const TokenName = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    letter-spacing: 0.05em;

    color: #170627;
`

export const TokenPrice = styled.h3`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    letter-spacing: 0.05em;

    color: #170627;
`

export const CategoryList = styled.ul`
    margin-bottom: 15px;
    @media only screen and (max-width: 380px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`

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

    @media only screen and (max-width: 380px) {
        margin: 5px;
    }
`

export const CategoryLink = styled(Link)`
    text-decoration: none;
    color: #170627;
`

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
`

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
`

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
`

export const TokenHoldings = styled.div`
    border: 1px solid #7e3bdc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
`

export const BalanceText = styled.span`
    font-weight: bold;
    color: #7e3bdc;
`

export const Button = styled.a`
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
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`

export const TradeButton = styled(Button)`
    margin-top: 20px;
    width: 100%;
`

export const CollapsibleChildren = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SubDAOImg = styled.img`
    border: 1px solid #e5e5e5;
    border-radius: 100%;
    margin-bottom: 20px;
    width: 50px;
    background-color: white;
`

export const SubDAOContainer = styled.div`
    margin-top: 20px;
`

export const ShareColumn = styled.div`
    display: flex;
    flex-direction: column;
`

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
`

export const BackHomeButton = styled(Button)`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 10px;

    @media only screen and (max-width: 350px) {
        width: 30px;
        height: 30px;
    }
`

export const BackHomeButtonText = styled.a`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 20px;

    @media only screen and (max-width: 350px) {
        top: 4px;
        left: 7.5px;
        font-size: 15px;
    }
`
