import styled from 'styled-components';
export const Wrapper = styled.div``;

export const GatesContainer = styled.div`
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
    
    width: 33.33%;

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
