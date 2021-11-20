import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div`
    position: relative;
    width: 60vw;
    border-radius: 20px;
    margin: 60px 0;
    background-color: #ffffff;
    height: 80vh;
`

export const CardBanner = styled.div`
    height: 40vh;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
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

export const DAOProfileContainer = styled.div`
    display: flex;
    height: 18vh;
    margin-left: 5%;
    margin-top: -8%;
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
    margin-left: 15px;
    text-shadow: 1px 1px black;

    @media only screen and (max-width: 300px) {
        font-size: 14px;
    }
`

export const BalanceText = styled.span`
    font-weight: bold;
    color: #7e3bdc;
`

export const ProfileAndFeedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    margin-left: 20px;
`

export const ProfileDiv = styled.div`
    display: flex;
    margin-left: 25px;
`

const SelectionTabStyling = `
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
    font-weight: bold;
    font-size: 20px;
    border-bottom: 3px solid pink;
`

export const SelectedTab = styled.h2`
    font-size: 18px;
    ${(props) => (props.showActive ? SelectionTabStyling : '')}

    margin-right: 25px;
    font-family: Poppins;
    font-style: normal;
    line-height: 40px;
    cursor: pointer;
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

export const TokenHoldings = styled.div`
    border: 1px solid #7e3bdc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    margin-right: 5%;
`
