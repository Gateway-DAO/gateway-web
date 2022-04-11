import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export const HeaderDiv = styled.header`
    width: 100%;
    position: relative;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #170627;

    &:before {
        content: '';
        position: absolute;
        left: 3%;
        bottom: 0;
        height: 1px;
        width: 94%; /* or 100px */
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    text-decoration: none;
    flex: 1;
`;

export const Logo = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`;

export const WalletBox = styled(Box)`
    margin-right: 45px;
`;

export const LogoText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.4em;

    color: #e5e5e5;

    margin-left: 20px;
`;

export const Text = styled.p`
    color: ${(props) => props.color};
    font-family: Be Vuetnam, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;

    margin-left: 40px;

    @media only screen and (max-width: 1170px) {
        font-size: 12px;
        line-height: 18px;
        margin-right: 15px;
    }
    @media only screen and (max-width: 768px) {
        font-size: 11px;
        line-height: 16px;
        margin-right: 10px;
        display: none;
    }
`;

export const OptionLink = styled(Link)`
    text-decoration: none;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 25px;
    flex: 1;
`;

export const GroupLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

export const SearchInputBox = styled.div`
    padding-left: 30px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
		width: 30%;

    @media only screen and (max-width: 945px) {
        margin: 0;
    }
    @media only screen and (max-width: 700px) {
        width: 45%;
    }
    @media only screen and (max-width: 480px) {
        width: 60%;
    }
`;

export const SearchInput = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    flex: 1;
    padding: 12px 0;
    margin-right: 15px;

    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #E5E5E5;

    &::placeholder {
        color: #E5E5E5;
    }
`;

export const WrappedFiSearch = styled(FiSearch)`
    font-size: 32pt;
    padding-right: 20px;
    color: #e5e5e5;
`;

export const Close = styled.span`
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #ff00b8;

    &:hover {
        cursor: pointer;
    }
`;
