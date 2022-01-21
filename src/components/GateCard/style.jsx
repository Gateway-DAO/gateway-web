import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const GateCardBox = styled.div`
    background-color: white;
    border-radius: 20px;
    display: grid;

    grid-template-rows: repeat(6, 1fr);
    cursor: pointer;
    // With the card bottom => height: 30em;
    height: 30em;
    width: 26em;
    // max-width: calc(100%/3.5);

    transition: margin 0.5s ease-in-out;
    transition: box-shadow 0.01s ease-in-out;

    &:hover {
        box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.5);
        margin-top: -5px;
    }

    @media only screen and (max-width: 1170px) {
        height: 27em;
        min-width: 15em;
    }
    // @media only screen and (max-width: 1000px) {
    //   min-width: calc(100%/3);
    //   max-width: calc(100%/2.5);
    // }
    // @media only screen and (max-width: 550px) {
    //     width: 100%;
    //     max-width: 400px;
    // }
    @media only screen and (max-width: 300px) {
        min-width: 200px;
        max-width: 200px;
    }
`
export const GateBanner = styled.div`
    position: relative;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-image: url('${(props) => props.src}');
    background-position: center;
    background-size: cover;
    grid-row: 1 / span 3;
`

export const EditContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
`

export const NFTBadgeContainer = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;
`
export const SimpleText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #170627;
`

export const GuildName = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height, or 131% */

    letter-spacing: -0.015em;

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
`

export const PeopleInvolved = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
`

export const CategoryList = styled.ul`
    //margin-top: -15px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 380px) {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        text-align: left;
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

export const CardBody = styled.div`
    margin-top: -10px;
    grid-row: 5 / span 2;
    padding: 15px;
`

export const CardTitle = styled.h1`
    font-family: 'Be Vietnam';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #170627;
`

export const CardDesc = styled.div`
    font-family: 'Be Vietnam', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    margin-top: 5px;

    color: #170627;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const InfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    /* align-items: center; */
    border-bottom: 1px solid #e5e5e5;
`
export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 0 20px;
    margin-bottom: 15px;
    text-align: left;
    margin-bottom: 15px;
`

export const MediumHeading = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height, or 131% */

    letter-spacing: -0.015em;

    color: #000000;
`

export const SmallText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin-left:10px;
    line-height: 18px;
    /* or 129% */

    color: #111827;
`
export const KeyBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Circle = styled.div`
    width: 16px;
    height: 16px;
    border: 5px solid red;
    border-radius: 100%;
    margin-right: 5px;
`

export const ActivityBox = styled.div`
    display: flex;

    align-items: center;
    margin: 15px;
`
export const ActionButton = styled.div`
    background: #ffffff;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 20px;
    width: 108px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`

export const ButtonText = styled.h3`
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
`

export const PublishContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`

export const PublishText = styled.span`
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
    margin-right: 5px;
`