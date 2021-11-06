import styled from "styled-components"

export const Container = styled.main`
    background-color: #170627;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const ResultsView = styled.div`
    display: flex;
    flex: 1;
`

export const CardBox = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 40px;
    margin-top: 60px;
    flex: 1;

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
        margin: 0 auto;
        margin-top: 60px;
    }

`

export const CardContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    @media only screen and (max-width: 945px) {
        padding-top: 75px;
    }
`

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

export const SearchTermContainer = styled.div`
    margin-top: 25px;
    text-color: white;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;

    @media only screen and (max-width: 945px) {
        margin-top: 25px;
        margin-bottom: -25px;
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const SearchTerm = styled.p`
    padding: 0 30px;
    margin-left: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
    /* Background */
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color:  transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export const NoResultsView = styled.div`
    // height: 30vh;
    width: auto;
    margin: 30px 0;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const BigLogoImg = styled.img`
    width: 198.11px;
    height: 198.11px;
`

export const HeaderMedium = styled.p`
    font-weight: 700;
    font-family: Poppins;
    font-size: 21px;
    line-height: 80px;
    font-style: normal;
    letter-spacing: -0.015em;
    color: #E5E5E5;
`

export const TextInfo = styled.div`
    font-weight: 400;
    font-family: Poppins;
    font-size: 12px;
    line-height: 16px;
    font-style: normal;
    letter-spacing: -0.015em;
    color: #E5E5E5;
    text-align: center;
`

export const SearchTextViolet = styled.button`
    color: #7E3BDC;
    text-decoration: none;
`

export const CommunityTextPink = styled.a`
    color: #FE02B9;
    text-decoration: none;
`