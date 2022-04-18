import styled from 'styled-components';

export const GateCardBox = styled.section`
    margin-left: -14px;
    margin-right: -14px;
    display: -webkit-box;
    flex-wrap: wrap;
    margin-top: 60px;
    place-items: center;
`;

export const GateItem = styled.div`
    box-sizing: border-box;
    padding: 14px;
    float: left;
    
    width: 25%;

    @media only screen and (max-width: 1200px) {
        width: 33.3%;
    }

    @media only screen and (max-width: 992px) {
        width: 50%;
    }

    @media only screen and (max-width: 768px) {
        width: 50%;
    }

    @media only screen and (max-width: 615px) {
        width: 100%;
    }
`;
