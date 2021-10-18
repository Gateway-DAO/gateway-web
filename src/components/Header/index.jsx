import { useState } from "react"
import { useHistory } from "react-router"
import * as Styled from "./style"

import Wallet from "../WalletHeader"

import logo from "../../assets/Gateway.svg"

const Header = props => {
    const [search, setSearch] = useState(props.search || {})
    const [inputVal, setInputVal] = useState(search.value || "")
    const history = useHistory();

    const handleEnter = e => {
        if (e.key === "Enter") {
            history.push(`/search/${e.target.value}`);
        }
    }

    return (
        <Styled.HeaderDiv>
            <Styled.LogoBox to="/">
                <img src={logo} alt="Gateway Logo" />
                <Styled.LogoText>GATEWAY</Styled.LogoText>
            </Styled.LogoBox>
            {
                search && search.visible &&
                <Styled.SearchBox>
                    <Styled.SearchInputBox>
                        <Styled.SearchInput type="search" value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyPress={handleEnter} />
                        <Styled.WrappedFiSearch size={20} />
                    </Styled.SearchInputBox>
                </Styled.SearchBox>
            }
            <Styled.WalletBox>
                <Styled.Text color="#FF00B8">Add Your Community</Styled.Text>
                <Wallet />
            </Styled.WalletBox>
        </Styled.HeaderDiv>
    )
}

export default Header