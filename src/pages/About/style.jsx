import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
`;
export const MainContainer = styled.div`
    padding: 5% 10% 0 10%;
    // margin-bottom: 5%;
`;
export const Container = styled.div`
    // padding-top:10%;
    padding-bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AboutImage = styled.div`
    margin-right: 10%;
`;
export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`;
export const Heading = styled.h2`
    align-self: start;
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
    margin-bottom: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 64px;
    /* identical to box height, or 178% */

    letter-spacing: -0.015em;
`;
export const Description = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-size: 21px;
    line-height: 31px;
    align-items: center;
    text-align: justify;
    color: #e5e5e5;
`;
export const BoldText = styled.span`
    font-weight: bold;
`;

export const AboutImg = styled.img`
    width: 35vw;
    height: 30vw;

    // border: 1px solid blue;
`;
export const MissionImg = styled.img`
    width: 35vw;
    height: 34vw;

    // border: 1px solid blue;
`;
export const WWDImg = styled.img`
    width: 48vw;
    height: 28vw;
    margin: -50px;
    // border: 1px solid blue;
`;

export const ReadMore = styled.a`
    text-decoration: none;
    color: #ff00b8;
`;
export const MissionImage = styled.div`
    // position: absolute;
    // width: 447.61px;
    // height: 423.38px;
    // left: 833.39px;
    // top: 733px;
    // overflow-x: hidden;
    margin-left: 7%;
`;
export const Box = styled.div`
    height: 280px;
    // margin-top: 5%;
    margin-bottom: 15%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 47px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #0075ff;
`;

export const WWDFrame = styled.div`
    position: absolute;
    width: 1440px;
    height: 2546px;
    left: 0px;
    top: 0px;
`;
export const WWDImage = styled.div`
    padding: 0;
    margin: 0;
    flex: 0;
`;
export const FooterContainer = styled.div`
    position: absolute;
    width: 1361px;
    // height: 248px;
    left: 39px;
    top: 2232px;
`;
