import styled from "styled-components"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import { useHistory } from "react-router"

import Wallet from "../WalletHeader"

import logo from "../../assets/Gateway.svg"

const HeaderDiv = styled.header`
    height: 90px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    grid-column-gap: 20px;
    margin: 0 40px;
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LogoBox = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-column: 1 / 3;
    text-decoration: none;
`

const WalletBox = styled(Box)`
    grid-column: 9 / main-end;
    justify-content: flex-end;
`

const SearchBox = styled(Box)`
    display: flex;
    flex-direction: row;
    grid-column: 5 / 8;
    align-items: center;
`

const SearchInputBox = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    width: 100%;
    padding: 10px 30px;
    flex: auto;
`

const SearchInput = styled.input`
    border: none;
    outline: none;
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

    margin-left: 20px;
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

    margin-right: 20px;
`

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
        <HeaderDiv>
            <LogoBox to="/">
                <img src={logo} alt="Gateway Logo" />
                <LogoText>GATEWAY</LogoText>
            </LogoBox>
            {
                search && search.visible &&
                <SearchBox>
                    <SearchInputBox>
                        <SearchInput value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyPress={handleEnter} />
                        <FiSearch size={20} />
                    </SearchInputBox>
                </SearchBox>
            }
            <WalletBox>
                <Text color="#FF00B8">Add Your Community</Text>
                <Wallet />
            </WalletBox>
        </HeaderDiv>
    )
}

export default Header