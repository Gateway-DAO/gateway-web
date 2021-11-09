import * as Styled from "./style"
import Wallet from "../WalletHeader"
import logo from "../../assets/Gateway.svg"
import useMediaQueries from "../../hooks/useMediaQueries"

const Header = props => {
    const { xs } = useMediaQueries();

    return (
        <Styled.HeaderDiv>
            <Styled.LogoBox to="/">
                <img src={logo} alt="Gateway Logo" />
                {!xs || <Styled.LogoText>GATEWAY</Styled.LogoText>}
                {!xs || <a href="https://forms.gle/xxTYYVqok8oT3Ku47" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">What are DAO's?</Styled.Text></a>}
                {!xs || <a href="https://forms.gle/xxTYYVqok8oT3Ku47" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">Add Your Community</Styled.Text></a>}
            </Styled.LogoBox>
            <Styled.WalletBox>
                {!xs || <a href="https://forms.gle/xxTYYVqok8oT3Ku47" target="_blank" style={{textDecoration:"none"}}><Styled.Text color="#FF00B8">Add Your Community</Styled.Text></a>}
                {!xs || <a href="https://readymag.com/u13829565/499896/" target="_blank" style={{textDecoration:"none"}}><Styled.Text color="#FF00B8">Learn</Styled.Text></a>}
                <Wallet />
            </Styled.WalletBox>
        

        </Styled.HeaderDiv>
    )
}

export default Header