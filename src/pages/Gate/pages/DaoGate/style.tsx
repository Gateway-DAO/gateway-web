import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ISmallLogoProps {
    src: string;
}

export const Wrapper = styled.div`
    background: #170627;
`;

export const LoaderBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    padding: 20px 40px 40px 40px;
    display: flex;
`;

export const MainContent = styled.div`
    padding: 20px 0px 0px 40px;
    width: 100%;
`;

export const FirstDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const SmallLogo = styled.div<ISmallLogoProps>`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background-image: url('${(props) => props.src}');
    background-position: center;
    background-size: cover;
`;

export const SmallText = styled.div`
    color: white;
    padding: 2px 0px 6px 10px;
    font-family: Be Vietnam;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;

    text-align: left;
`;

export const HeadingDiv = styled.div`
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: -0.015em;
    text-align: left;
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

export const Subheading = styled.div`
    color: white;
    font-family: Be Vietnam;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
`;

export const TagsDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: rgba(165, 165, 165, 1);
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
`;

export const AdditionalInfoBox = styled.div`
    display: flex;
    margin-top: 38px;

    & > * {
        margin-right: 40px;
    }
`;

export const AdminsBox = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
`;

export const ContentContainer = styled.div`
    margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: left;
`;

interface IPfpAdmin {
    src?: string;
}

export const PfpAdmin = styled.div<IPfpAdmin>`
    display: flex;
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: white;
    margin-right: 7px;

    background: url(${(props) => props.src || ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &[data-title]:hover:after {
        content: attr(data-title);
        position: absolute;
        padding: 2px 8px;

        top: 46px;

        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        // line-height: px;

        display: flex;
        align-items: center;

        background: #220a38;
        border: 1px solid #7e3bdc;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
`;

export const BoldTextHeading = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
`;

const InfoTextStyling = `
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-right: 30px;

    color: #e5e5e5;

    text-decoration: none;

    display: inline-block;
`;

export const OutsideLink = styled.a`
    ${InfoTextStyling}
`;

export const InsideLink = styled(Link)`
    ${InfoTextStyling}
`;

export const PreRequisiteBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tag = styled.div`
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 3px 10px;
    margin-right: 15px;
    text-align: center;
`;

export const HeaderLine = styled.div`
    margin: 40px 0px 20px 0px;
    width: 100%;
    height: 2px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const SecondDiv = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
`;

export const SecondDivName = styled.div`
    font-family: Be Vietnam;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 0, 184, 1);
`;

export const AnotherDiv = styled.div`
    display: flex;
    color: white;
    align-items: center;
`;

export const CircleBox = styled.div`
    height: 50px;
    width: 50px;

    & .CircularProgressbar .CircularProgressbar-path {
        stroke: url(#circleGradient);
    }
`;

export const ProgressInfoDiv = styled.div`
    margin-left: 10px;
    margin-right: 20px;
`;

export const ProgressInfoDivOne = styled.div`
    color: white;
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.03em;
    text-align: left;
`;

export const ProgressInfoDivTwo = styled.div`
    font-family: Be Vietnam;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.03em;
    text-align: left;
`;

export const ThirdDiv = styled.div`
    padding-top: 30px;
    color: white;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid rgba(165, 165, 165, 0.5);
    box-sizing: border-box;
    border-radius: 20px;
    align-items: center;
    justify-content: center;

    padding: 80px 0;
`;

export const BigText = styled.div`
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: -0.015em;
    text-align: left;

    margin-bottom: 20px;
`;

export const StartButton = styled.div`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: center;
    color: white;
    border-radius: 20px;
    border: solid 1px transparent;
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover {
        cursor: pointer;
    }

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.p`
    margin: 16px 48px;
    font-size: 14px;
`;
