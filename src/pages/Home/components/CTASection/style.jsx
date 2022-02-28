import styled from 'styled-components';
import CTA_BG from '../../../../assets/bubbles-new.png';
import base from '../../../../assets/about-dao-images/base.png';
import sparkles from '../../../../assets/about-dao-images/sparkles.png';
import dots from '../../../../assets/about-dao-images/dots.png';
import stars from '../../../../assets/about-dao-images/stars.png';
import lb1 from '../../../../assets/about-dao-images/lb1.png';
import lb2 from '../../../../assets/about-dao-images/lb2.png';
import lb3 from '../../../../assets/about-dao-images/lb3.png';
import rb1 from '../../../../assets/about-dao-images/rb1.png';
import rb2 from '../../../../assets/about-dao-images/rb2.png';
import { keyframes } from 'styled-components';

const OpacityOne = keyframes`
 0% { opacity:1 }
 50% {opacity:0.3}
 100% { opacity:1 }
`;
const OpacityTwo = keyframes`
 0% { opacity:1 }
 50% { opacity:0.5 }
 100% { opacity:1}
`;
const FloatOne = keyframes`
0% {
	transform: translatey(0px);
}
50% {
	transform: translatey(-20px);
}
100% {
	transform: translatey(0px);
}
`;

export const MainWrapper = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Base = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${base});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
export const Sparkles = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${sparkles});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${OpacityOne};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const Dots = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${dots});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${OpacityTwo};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const Stars = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${stars});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${OpacityTwo};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const LbOne = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${lb1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${FloatOne};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const LbTwo = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${lb2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${FloatOne};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const LbThree = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${lb3});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${FloatOne};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const RbOne = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${rb1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${FloatOne};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const RbTwo = styled.div`
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-image: url(${rb2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${FloatOne};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const BubbleImageContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url('${CTA_BG}');
    background-position: center;
    background-size: cover;
    justify-content: center;
    animation-name: ${FloatOne};
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const HeadingText = styled.h2`
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
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 85px;
    line-height: 64px;
    /* or 100% */
    letter-spacing: -0.015em;
    display: flex;
    align-self: center;
    padding: 5px;
    z-index: 1;

    @media only screen and (max-width: 768px) {
        font-size: 50px;
        line-height: 54px;
        margin: 0 30px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 35px;
        line-height: 44px;
        margin: 0 25px;
    }

    @media only screen and (max-width: 350px) {
        font-size: 30px;
        line-height: 38px;
        margin: 0 20px;
    }
`;

export const TextDiv = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
