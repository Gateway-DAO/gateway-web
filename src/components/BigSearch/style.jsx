import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchMainDiv = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    justify-content: center;
    margin-top: 30px;
    @media only screen and (max-width: 768px) {
        height: 120px;
    }

    @media only screen and (max-width: 470px) {
        height: 80px;
    }

    @media only screen and (max-width: 380px) {
        height: 60px;
    }

    @media only screen and (max-width: 310px) {
        height: 40px;
    }

    @media only screen and (max-width: 300px) {
        height: 35px;
    }
`;
export const SearchSecondary = styled.div`
    position: relative;
    width: 60%;
    @media only screen and (max-width: 768px) {
        height: 120px;
    }

    @media only screen and (max-width: 470px) {
        height: 80px;
    }

    @media only screen and (max-width: 380px) {
        height: 60px;
    }

    @media only screen and (max-width: 310px) {
        height: 40px;
    }

    @media only screen and (max-width: 300px) {
        height: 35px;
    }
`;

export const TypewriterDiv = styled.div`
    position: absolute;
    top: 0%;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px 0 0 100px;
    background-color: white;
`;
export const TypewriterText = styled.div`
    font-family: 'Poppins', sans-serif !important;
    display: flex;
    top: 0%;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px 0 0 100px;
    background-color: white;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    letter-spacing: -0.05em;
    color: #e5e5e5;
    @media only screen and (max-width: 768px) {
        border-radius: 100px;
        line-height: 80px;
        font-size: 38px;
    }

    @media only screen and (max-width: 470px) {
        font-size: 30px;
    }

    @media only screen and (max-width: 380px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 310px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 15px;
    }
`;

export const InputBox = styled.input`
    position: absolute;
    background-color: transparent;
    top: 0%;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 50px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 44px;
    letter-spacing: -0.05em;
    color: #170627;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    border-radius: 100px 0 0 100px;

    @media only screen and (min-width: 768px) {
        font-size: 54px;
        line-height: 80px;
    }

    @media only screen and (max-width: 470px) {
        font-size: 30px;
        line-height: 45px;
    }

    @media only screen and (max-width: 380px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 310px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 20px;
    }
`;

export const SearchIconDiv = styled.div`
    display: flex;
    width: 10%;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 0px 100px 100px 0px;
    cursor: pointer;
`;

export const WrappedFiSearch = styled(FiSearch)`
    padding-right: 35px;
    font-size: 90px;

    @media only screen and (max-width: 767px) {
        font-size: 75px;
        padding-right: 10px;
    }

    @media only screen and (max-width: 470px) {
        font-size: 50px;
    }

    @media only screen and (max-width: 380px) {
        font-size: 40px;
    }

    @media only screen and (max-width: 310px) {
        font-size: 35px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 20px;
    }
`;
