import { FiSearch } from 'react-icons/fi';
import style from 'styled-components';

export const MainPage = style.div`
    // background-color: #170627;
    min-height: 100vh;
    // overflow-x: hidden;
    // width: 100vw;
    // display: flex;
    // justify-content: space-between;
    // flex-direction: column;
    background-color: transparent;
    height: 100%;
    position: relative;

    overflow-x: hidden;

    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    }
`;
export const Wrapper = style.div`
    padding: 0 3%; 
`;
export const Top = style.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
`;
export const LeftText = style.div`
    text-align: left;
`;
export const Heading = style.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 64px;
    /* or 94% */

    // text-align: center;
    letter-spacing: -1.5%;

    /* Background */
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
        
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    // grid-column: 1/4;
`;
export const Para = style.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    /* or 186% */

    display: flex;
    align-items: center;

    color: #E5E5E5;
`;
export const RightSearch = style.div`
    // margin-right: 40px;
    // padding-left: 30px;
    background: #FFFFFF;
    width: 30%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border-radius: 100px;
    height:40px;
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
export const SearchBar = style.input`
border: none;
outline: none;
flex: 1;
padding: 10px;
border-radius: 100px;
`;
export const WrappedFiSearch = style(FiSearch)`
    font-size: 20px;
    padding-right: 20px;
`;

export const CardCategoryTitleDev = style.div`
    margin-top:5%;
    margin-bottom:2%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
export const CategryTitle = style.div`

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #E5E5E5;
`;
export const AddButton = style.div`
    border: 1px solid #A5A5A5;
    box-sizing: border-box;
    border-radius: 20px;
    width:120px;
    height:40px;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const ButtonText = style.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #E5E5E5;

`;
