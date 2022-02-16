import styled from 'styled-components';

export const Container = styled.main`
    background-color: #170627;
    overflow-x: hidden;
    width: auto;
    display: flex;
    //justify-content: center;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
`;

export const LoaderBox = styled.section`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainBox = styled.section`
    display: grid;
    grid-template-columns: 2fr 2fr 6fr 2fr;
    grid-column-gap: 20px;
    margin-top: 40px;
`;

export const LeftSidebar = styled.aside`
    grid-column: 2 / 2;
`;

export const ProfileDiv = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 28px;
    color: rgba(255, 255, 255, 0.6);
`;

const SelectionTabStyling = `
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
    font-weight: bold;
    font-size: 20px;

    border-bottom: 4px solid ;
    border-image: linear-gradient(95.57deg, #EE787B 8.89%, #E153F2 34.15%, #495BE0 67.09%, #6A39F3 95.52%);
    border-image-slice: 1;  

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    /* or 444% */
`;

const UnselectedTabStyling = `
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: rgba(255, 255, 255, 0.6);
`;

export const SelectedTab = styled.h2`
    ${(props) =>
        props.showActive ? SelectionTabStyling : UnselectedTabStyling}

    margin-right: 25px;
    display: flex;
    line-height: 50px;
    align-items: flex-start;
    letter-spacing: -0.015em;
`;

export const UserInfo = styled.section`
    display: flex;
    flex-direction: column;
`;

export const RightSidebar = styled.aside``;

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;
