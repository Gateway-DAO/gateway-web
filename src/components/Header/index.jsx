import styled from "styled-components"
import logo from "../../assets/Gateway.svg"

import Wallet from "../WalletHeader"

const HeaderDiv = styled("header")`
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Box = styled("div")`
    display: flex;
    flex-direction: row;
`

const LogoText = styled("h1")`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.4em;

    color: #E5E5E5;
`

const Text = styled.div`
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
            <Box>
                <img src={logo} alt="Gateway Logo" />
                <LogoText>GATEWAY</LogoText>
            </Box>
            <Box>
                <Text color="#FF00B8">Add Your Community</Text>
                <Wallet />
            </Box>
        </HeaderDiv>
    )
}

export default Header