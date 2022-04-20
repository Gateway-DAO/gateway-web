import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GateCardBox = styled.div`
    position: relative;
`;

export const GateContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    display: grid;

    grid-template-rows: repeat(7, 1fr);
    cursor: pointer;
    // With the card bottom => height: 30em;
    height: 33em;

    transition: margin 0.5s ease-in-out;
    transition: box-shadow 0.01s ease-in-out;

    &:hover {
        box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.5);
        margin-top: -5px;
    }

    @media only screen and (max-width: 1170px) {
        height: 35em;
    }

    @media only screen and (max-width: 785px) {
        height: 35em;
    }
    // @media only screen and (max-width: 1000px) {
    //   min-width: calc(100%/3);
    //   max-width: calc(100%/2.5);
    // }
    @media only screen and (max-width: 550px) {
        height: 35em;
    }
`;
export const GateBanner = styled.div`
    position: relative;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-image: url('${(props) => props.src}');
    background-position: center;
    background-size: cover;
    grid-row: 1 / span 3;
`;

export const EditContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
`;

export const NFTBadgeContainer = styled.div`
    // position: absolute;
    // bottom: 15px;
    // left: 15px;
    display: flex;
    flex-direction: column;
`;
export const PreRequisiteContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
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
`;

export const GuildName = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
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
`;

export const PeopleInvolved = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
`;

export const CategoryList = styled.ul`
    //margin-top: -15px;
    margin: 0 25px;
    margin-top: 20px;
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
`;

export const Category = styled.li`
    border: 1px solid #170627;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;

    align-items: center;
    justify-content: center;

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
`;

export const CategoryLink = styled(Link)`
    text-decoration: none;
    color: #170627;
`;

export const CardBody = styled.div`
    margin-top: -10px;
    grid-row: 5 / span 3;
    margin: 0 25px;
`;

export const CardTitle = styled.h1`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */
    display: flex;
    align-items: center;
    color: #170627;
`;

export const CardDesc = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    margin-top: 5px;

    color: #170627;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const InfoContainer = styled.div`
    display: grid;
    border-bottom: 1px solid #e5e5e5;
    margin: 0 25px;
    padding-bottom: 15px;
    grid-template-columns: auto auto;
    column-gap: 40px;
`;
export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    text-align: left;
    // margin-right: 20px;
`;

export const MediumHeading = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    letter-spacing: -0.015em;
    color: #000000;
`;

export const SmallText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    /* or 129% */

    color: #111827;
`;
export const KeyBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-top: 5px;
`;

export const Circle = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 5px;

    & .CircularProgressbar .CircularProgressbar-path {
        stroke: url(#circleGradient);
    }
`;

export const ActivityBox = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin: 15px;
`;
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
`;

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
`;

export const PublishContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`;

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
`;
export const Column = styled.div`
    display: flex;
    // align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
`;
export const InfoText = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */

    color: #111827;
`;
