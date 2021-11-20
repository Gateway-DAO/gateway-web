import styled from 'styled-components'

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
`

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

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 20px;

    @media only screen and (max-width: 1030px) {
        display: flex;
        flex-direction: column;
    }
`
export const ColumnOne = styled.div`
    /* grid-column: ${(props) => (props.fullWidth ? '1 / 9' : '1 / span 9')}; */
    grid-column: 1/9;
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

export const DaoProfileContainer = styled.div`
    display: flex;
    margin-top: -3%;
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

export const SelectedTab = styled.h2`
    ${(props) =>
        props.showActive
            ? 'background: linear-gradient(88.04deg, #ee787b 22.54%, #e153f2 41.08%, #495be0 65.25%, #6a39f3 86.1%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;    -moz-background-clip: text;-moz-text-fill-color: transparent;font-weight: bold;'
            : ''}

    margin-right: 15px;
    font-family: Poppins;
    font-style: normal;
    font-size: 18px;
    line-height: 40px;
    cursor: pointer;
`

export const BalanceText = styled.span`
    font-weight: bold;
    color: #7e3bdc;
`
