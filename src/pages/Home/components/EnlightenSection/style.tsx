import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MediumText } from '../../style';

// englighten me section styling

export const EMSBox = styled.section`
    margin: 125px 0 50px 0;
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    height: 60vh;
    justify-content: center;

    @media only screen and (max-width: 1550px) {
        margin: 100px 0 50px 0;
    }

    @media only screen and (max-width: 768px) {
        margin: 100px 0 50px 0;
    }
`;

export const EMSImageContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
`;

export const EMSContentContainer = styled.div`
    display: flex;
    width: 40%;
    align-items: flex-start;
    flex-direction: column;
`;

export const EMSMediumText = styled(MediumText)`
    text-align: left;
`;

export const EMSButton = styled(Link)`
    background: linear-gradient(
        88.53deg,
        #ee787b 2.77%,
        #e153f2 51.87%,
        #495be0 98.96%
    );
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    padding: 10px 50px;
    margin-top: 70px;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`;
