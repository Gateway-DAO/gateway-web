import { useState } from "react"
import { useHistory } from "react-router"
import * as Styled from "./style"

import Wallet from "../WalletHeader"
import logo from "../../assets/Gateway.svg"
import useMediaQueries from "../../hooks/useMediaQueries"

const Header = props => {
    const [search, setSearch] = useState(props.search || {})
    const [inputVal, setInputVal] = useState(search.value || "")
    const history = useHistory();
    const { xs } = useMediaQueries();

    const handleEnter = e => {
        if (e.key === "Enter") {
            history.push(`/search/${e.target.value}`);
        }
    }

    return (
        <Styled.HeaderDiv>
            <Styled.LogoBox to="/">
                <img src={logo} alt="Gateway Logo" />
                {!xs || <Styled.LogoText>GATEWAY</Styled.LogoText>}
            </Styled.LogoBox>
            {
                search && search.visible &&
                <Styled.SearchBox>
                    <Styled.SearchInputBox>
                        <Styled.SearchInput type="search" value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyPress={handleEnter} />
                        <Styled.WrappedFiSearch />
                    </Styled.SearchInputBox>
                </Styled.SearchBox>
            }
            <Styled.WalletBox>
                {!xs || <a href="https://forms.gle/xxTYYVqok8oT3Ku47" target="_blank" style={{textDecoration:"none"}}><Styled.Text color="#FF00B8">Add Your Community</Styled.Text></a>}
                {!xs || <a href="https://readymag.com/u13829565/499896/" target="_blank" style={{textDecoration:"none"}}><Styled.Text color="#FF00B8">What is a DAO?</Styled.Text></a>}
                <Wallet />
            </Styled.WalletBox>
        

        </Styled.HeaderDiv>
    )
}

export default Header