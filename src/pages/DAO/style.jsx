import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Container = styled.main`
    background-color: #170627;
    min-height: 100vh;
    overflow-x: hidden;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const LoaderBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchTermContainer = styled.div`
    margin-top: 25px;
    color: white;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;

    @media only screen and (max-width: 945px) {
        margin-top: 25px;
        margin-bottom: -25px;
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const BackButtonContainer = styled.div`
    padding: 0 30px;
    margin-left: 20px;
    display: flex;
    align-items: center;
`;

export const Button = styled.a`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;

    text-decoration: none;
    padding: 10px;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`;

export const BackHomeButton = styled(Button)`
    width: 40px;
    height: 40px;
    position: relative;
    @media only screen and (max-width: 350px) {
        width: 35px;
        height: 35px;
    }
`;

export const BackHomeButtonText = styled.a`
    font-size: 30px;
    position: absolute;
    top: 6px;
    left: 6px;
    @media only screen and (max-width: 350px) {
        top: 4px;
        left: 7.5px;
        font-size: 15px;
    }
`;

export const BackButtonText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    margin-left: 10px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #e5e5e5;
`;
export const SearchInputBox = styled.div`
    margin-right: 40px;
    padding-left: 30px;
    background: #170627;
    width: 15%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
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
    background: #170627;
    color: #ffffff;
    outline: none;
    flex: 1;
    padding: 12px 0;
`;

export const WrappedFiSearch = styled(FiSearch)`
    font-size: 20px;
    padding-right: 20px;
`;
