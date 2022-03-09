import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Container = styled.main`
    background-color: #170627;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
`;

export const LoaderBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextBox = styled(LoaderBox)`
    flex-flow: column;
`;

export const MainText = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 80px;
    /* identical to box height, or 381% */

    letter-spacing: -0.015em;

    color: #e5e5e5;
`;

export const SmallText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */

    text-align: center;
    letter-spacing: -0.015em;

    color: #e5e5e5;
`;

export const CardBox = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 40px;
    margin-top: 60px;

    /*
    @media only screen and (max-width: 1700px) {
        grid-template-columns: repeat(3, 1fr);
    }
    */

    @media only screen and (max-width: 1170px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 735px) {
        grid-template-columns: repeat(1, 100%);
    }

    @media only screen and (max-width: 480px) {
        margin-top: 60px;
    }
`;

export const CardContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    @media only screen and (max-width: 945px) {
        padding-top: 75px;
    }
`;

// export const SearhTermContainer = styled.div`
//     text-color: white;
//     margin-bottom: 55px;
// `

// export const SearchTerm = styled.p`
//     display: inline;

//     font-family: 'Montserrat';
//     font-style: normal;
//     font-weight:  '800';
//     font-size: '104px';
//     line-height: 20px;
//     letter-spacing: 0.05em;
//     text-transform: capitalize;
//     color: rgba(255, 255, 255, 0.6);
//     /* Background */
//     background:  'linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);';
//     -webkit-background-clip: 'text';
//     -webkit-text-fill-color: 'transparent';
//     -moz-background-clip: 'text';
//     -moz-text-fill-color: 'transparent';
// `

export const Nav = styled.div`
    margin: 25px 40px 0px 40px;
    color: white;
    display: flex;
    align-items: center;
    text-transform: capitalize;

    @media only screen and (max-width: 945px) {
        margin-top: 25px;
        margin-bottom: -25px;
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const SearchTermContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: auto;
`;

export const SearchIcon = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

export const SearchTerm = styled.p`
    margin-left: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    // line-height: 20px;
    align-self: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
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

    @media only screen and (max-width: 945px) {
        padding: 30px 0;
        margin-left: 0px;
    }
`;

export const DAOAndUserSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SelectContainer = styled.div`
    position: relative;
    width: 90px;
    height: 40px;
    border: ${(props) =>
        props.active ? `none` : `1px solid rgba(229, 229, 229, 0.5)`};
    box-sizing: border-box;
    border-radius: 20px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2px;
    cursor: pointer;
    background: ${(props) =>
        props.active ? 'rgba(229, 229, 229, 0.2)' : 'inherit'}; ;
`;

export const SelectContainerText = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
`;

export const LeftNav = styled.div`
    display: flex;
    flex: 1;
    margin-left: auto;
    justify-content: flex-end;
    align-items: center;
`;

export const FilterText = styled.span`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;

    margin-right: 15px;

    color: #e5e5e5;
`;

export const FilterBox = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInputBox = styled.div`
    padding-left: 30px;
    background: #ffffff;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
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
    outline: none;
    flex: 1;
    padding: 10px 0;
    border-radius: 100px;
`;

export const WrappedFiSearch = styled(FiSearch)`
    font-size: 20px;
    padding-right: 20px;
`;

export const SearchSuggestionBox = styled.ul`
    position: absolute;
    z-index: 50;
    left: 0;
    top: 50px;
    right: 0;
    max-height: 270px;
    min-height: 40px;
    // width: 20%;
    // height: 268px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    // padding-top:10px;
    // padding-bottom:10px;
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
export const SearchMoreButton = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: black;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    // padding-left:40px;
    cursor: pointer;
    border-top: ${(props) => (props.inputVal ? '1px solid #E5E5E5;' : 'none')};
`;
