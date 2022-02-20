import styled from 'styled-components';

export const CardWrapper = styled.div`
    min-width: 300px;
`;
export const CardBox = styled.div`
    background-color: white;
    border-radius: 20px;
    display: grid;
    // With the card bottom => grid-template-rows: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    // With the card bottom => height: 30em;
    height: 350px;
`;

export const CardBanner = styled.div`
    position: relative;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-image: url('${(props) => props.src}');
    background-position: center;
    background-size: cover;
    height: 260px;
    width: 300px;
    object-fit: cover;
`;

export const CardBody = styled.div`
    grid-row: 3 / span 2;
    padding: 0px 20px;
    /* margin-bottom: 15px; */
`;

export const CardBadge = styled.h1`
    font-family: 'Be Vietnam';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
`;
export const CardBadgeText = styled.h1`
    height: 100%;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    z-index: 100;
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
`;
