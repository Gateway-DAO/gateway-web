import styled from "styled-components"
import logo from "../../assets/Gateway.svg"

import Wallet from "../WalletHeader"

const HeaderDiv = styled.header`
    height: 90px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LogoBox = styled(Box)`
    grid-column: 1 / 3;
`

const WalletBox = styled(Box)`
    grid-column: 10 / 13;
`

const LogoText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.4em;

    color: #E5E5E5;
`

const Text = styled.p`
    color: ${props => props.color};
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
`

const Header = props => {
    return (
        <HeaderDiv>
            <LogoBox>
                <img src={logo} alt="Gateway Logo" />
                <LogoText>GATEWAY</LogoText>
            </LogoBox>
            <WalletBox>
                <Text color="#FF00B8">Add Your Community</Text>
                <Wallet />
            </WalletBox>
        </HeaderDiv>
    )
}

export default Header