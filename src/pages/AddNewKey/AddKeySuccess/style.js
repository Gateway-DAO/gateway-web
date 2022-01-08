import styled from 'styled-components'
export const Wrapper = styled.div`
    background: #170627;
`
export const HeadingMainWrapper = styled.div`
    display: flex;
    height: 80vh;
    width: 100%
    align-items: center;
    justify-content: center;
`
export const HeadingSecondWrapper = styled.div`
    display: flex;
    width: 45%;
    text-align:center;
    align-items:center;
`

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
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 90px;
    letter-spacing: -0.05em;
    text-align: center;

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
`
